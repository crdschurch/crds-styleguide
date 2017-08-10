window['CRDS'] = window['CRDS'] || {};

// ---------------------------------------- JumbotronVideoPlayers

CRDS.JumbotronVideoPlayers = function() {
  this.inlineVideoPlayers = document.querySelectorAll('.jumbotron.inline-video');
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
    for (var i = 0; i < this.inlineVideoPlayers.length; i++) {
      new CRDS.JumbotronInlineVideoPlayer(this.inlineVideoPlayers[i]);
    }
  }
  return;
}

// ---------------------------------------- JumbotronInlineVideoPlayer

CRDS.JumbotronInlineVideoPlayer = function(jumbotronEl) {
  this.jumbotronEl = jumbotronEl;
  this.init();
  return;
};

CRDS.JumbotronInlineVideoPlayer.prototype.init = function() {
  this.videoTrigger = this.jumbotronEl.querySelector('.inline-video-trigger');
  this.videoTrigger.innerHTML = '\
    <svg class="icon icon-5" viewBox="0 0 256 256"\>\
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svgs/icons.svg#play-thin"></use\>\
    </svg\>';

  this.videoId = this.videoTrigger.getAttribute('data-video-id')
  this.playerContainerEl = this.jumbotronEl.querySelector('.inline-video-player');
  this.playerId = 'video-player-' + Math.random().toString(36).substr(2, 10);
  this.playerEl = document.createElement('div');
  this.playerEl.setAttribute('id', this.playerId);
  this.playerContainerEl.appendChild(this.playerEl);

  this.playerOptions = {
    autoplay: 1,
    controls: 1,
    playsinline: 0,
    modestbranding: 1,
    showinfo: 0
  };

  this.closeButton = document.createElement('a');
  this.closeButton.classList.add('close-video');
  this.closeButton.innerHTML = '\
    <svg class="icon icon-2" viewBox="0 0 256 256"\>\
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/svgs/icons.svg#close"></use\>\
    </svg\>';

  this.playerContainerEl.insertBefore(this.closeButton, this.playerContainerEl.firstChild);

  this.bindEvents();
};

CRDS.JumbotronInlineVideoPlayer.prototype.initVideo = function() {
  var _this = this;
  this.player = new YT.Player(this.playerId, {
    videoId: this.videoId,
    playerVars: this.playerOptions,
    events: {
      onReady: function(event) {
        _this.playVideo(event);
      },
      onStateChange: function(event) {
        _this.onStateChange(event);
      }
    }
  });
  return true;
};

CRDS.JumbotronInlineVideoPlayer.prototype.bindEvents = function() {
  var _this = this;

  this.videoTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    _this.playVideo();
  }, true);

  this.closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    _this.stopVideo();
  }, true);
};

CRDS.JumbotronInlineVideoPlayer.prototype.playVideo = function(event = null) {
  if (!this.player) {
    this.initVideo();
    return true;
  }
  this.playerContainerEl.classList.add('active');
};

CRDS.JumbotronInlineVideoPlayer.prototype.stopVideo = function() {
  this.playerContainerEl.classList.remove('active');
  this.player.stopVideo();
};

CRDS.JumbotronInlineVideoPlayer.prototype.onStateChange = function(event) {
  if (event.data == YT.PlayerState.ENDED) {
    this.stopVideo();
  }
};
