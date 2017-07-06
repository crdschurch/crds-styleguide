window['CRDS'] = window['CRDS'] || {};

// ---------------------------------------- JumbotronVideoPlayers

CRDS.JumbotronVideoPlayers = function() {
  this.bgVideoPlayers = document.querySelectorAll('.jumbotron.bg-video');
  if(typeof YT == 'object') {
    this.init();
  } else {
    var jsUrl = 'https://www.youtube.com/iframe_api';
    this.loadScript(jsUrl, this.__bind(this.init, this));
  }
  return;
};

CRDS.JumbotronVideoPlayers.prototype.__bind = function(fn, me) {
  return function() {
    return fn.apply(me, arguments);
  };
};

CRDS.JumbotronVideoPlayers.prototype.loadScript = function(url, callback) {
  var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.onreadystatechange = callback;
      script.onload = callback;
  var head = document.getElementsByTagName('head')[0];
      head.appendChild(script);
}

CRDS.JumbotronVideoPlayers.prototype.init = function() {
  this.interval = setInterval(this.__bind(this.initVideos, this), 100);
};

CRDS.JumbotronVideoPlayers.prototype.initVideos = function() {
  if (typeof YT == 'object' && typeof YT.Player == 'function') {
    clearInterval(this.interval);
    for (var i = 0; i < this.bgVideoPlayers.length; i++) {
      new CRDS.JumbotronBgVideoPlayer(this.bgVideoPlayers[i]);
    }
  }
  return;
}

// ---------------------------------------- JumbotronBgVideoPlayer

CRDS.JumbotronBgVideoPlayer = function(jumbotronEl) {
  this.jumbotronEl = jumbotronEl;
  this.init();
  return;
}

CRDS.JumbotronBgVideoPlayer.prototype.init = function() {
  this.playerContainerEl = this.jumbotronEl.querySelector('.bg-video-player');
  this.playerId = 'video-player-' + Math.random().toString(36).substr(2, 10);

  this.playerEl = document.createElement('div');
  this.playerEl.setAttribute('id', this.playerId);
  this.playerContainerEl.appendChild(this.playerEl);

  this.videoId = this.jumbotronEl.getAttribute('data-video-id');
  if (!this.videoId) {
    throw 'data-player-id is required on the jumbotron containing element.';
  }

  this.playerOptions = {
    autoplay: 0,
    controls: 0,
    modestbranding: 1,
    loop: 1,
    playsinline: 1,
    showinfo: 0,
    playlist: this.videoId // See: https://stackoverflow.com/a/25781957/2241124
  };

  this.preloader = document.createElement('div');
  this.preloader.classList.add('inline-preloader-wrapper');
  this.preloader.innerHTML = '\
    <svg viewBox="0 0 102 101" class="inline-preloader inline-preloader--top-right inline-preloader--small"\>\
      <g fill="none" fill-rule="evenodd"\>\
        <g transform="translate(1 1)" stroke-width="2"\>\
          <ellipse stroke="#eee" cx="50" cy="49.421" rx="50" ry="49.421"\></ellipse\>\
          <path d="M50 98.842c27.614 0 50-22.127 50-49.42C100 22.125 77.614 0 50 0" stroke-opacity=".631" stroke="#3B6E8F"\></path\>\
        </g\>\
      </g\>\
    </svg\>';
  this.jumbotronEl.insertBefore(this.preloader, this.jumbotronEl.firstChild);
  this.preloaderContainerEl = this.jumbotronEl.querySelector('.inline-preloader-wrapper');
  this.preloaderEl = this.jumbotronEl.querySelector('.inline-preloader');

  return this.initVideo();
};

CRDS.JumbotronBgVideoPlayer.prototype.initVideo = function() {
  var _this = this;
  this.player = new YT.Player(this.playerId, {
    videoId: this.videoId,
    playerVars: this.playerOptions,
    events: {
      onReady: function(event) {
        _this.onVideoReady(event);
        _this.playVideo();
      },
      onStateChange: function(event) {
        _this.onVideoStateChange(event);
      }
    }
  });
  this.bindEvents();
};

CRDS.JumbotronBgVideoPlayer.prototype.playVideo = function() {
  var _this = this;
  if (!this.player.playVideo) {
    setTimeout(function() {
      _this.playVideo();
    }, 250);
    return true;
  }
  this.player.playVideo();
};

CRDS.JumbotronBgVideoPlayer.prototype.onVideoReady = function(event) {
  this.resizePlayer();
  event.target.mute();
};

CRDS.JumbotronBgVideoPlayer.prototype.onVideoStateChange = function(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    this.preloaderContainerEl.classList.add('loaded');
  } else {
    this.preloaderContainerEl.classList.remove('loaded');
  };
};

CRDS.JumbotronBgVideoPlayer.prototype.resizePlayer = function() {
  var width = this.jumbotronEl.offsetWidth,
      height = this.jumbotronEl.offsetHeight,
      ratio = parseFloat(this.jumbotronEl.getAttribute('data-aspect-ratio')) ||
              (16 / 9);

  // If the container is wider than the desired ratio ...
  if (width / height > ratio) {
    // The new width should be the width of the container,
    // while the new height maintains the aspect ratio.
    var newWidth = width,
        newHeight = width / ratio;

    // Resize the player.
    this.player.setSize(newWidth, newHeight);

    // The player's container should sit at the left,
    // and at half of its excess height.
    this.playerContainerEl.style.left = 0;
    this.playerContainerEl.style.top = -((newHeight - height) / 2) + 'px';
  }
  // If the player is higher than the aspect ratio
  else {
    // The new height should be the height of the container,
    // while the new width maintains the aspect ratio.
    var newHeight = height,
        newWidth = height * ratio;

    // Resize the player.
    this.player.setSize(newWidth, newHeight);

    // The player's container should sit at the top,
    // and at half of its excess width.
    this.playerContainerEl.style.top = 0;
    this.playerContainerEl.style.left = -((newWidth - width) / 2) + 'px';
  };
};

CRDS.JumbotronBgVideoPlayer.prototype.bindEvents = function() {
  var _this = this;

  window.addEventListener('resize', function(event) {
    _this.resizePlayer();
  }, true);
};
