// Instantiate the global CRDS object.
window['CRDS'] = window['CRDS'] || {};

// Load the YouTube iframe API and insert into the page above the first script.
var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  if (document.readyState != 'complete') {
    setTimeout(onYouTubeIframeAPIReady, 100);
    return true;
  }

  var videoPlayers = document.querySelectorAll('.jumbotron.bg-video')

  for (i = 0; i < videoPlayers.length; i++) {
    new CRDS.JumbotronVideoPlayer(videoPlayers[i]);
  }
}

CRDS.JumbotronVideoPlayer = function(jumbotronEl) {
  this.jumbotronEl = jumbotronEl;
  this.playerContainerEl = this.jumbotronEl.querySelector('.bg-video-player');
  this.playerId = 'video-player-' + Math.random().toString(36).substr(2, 10);

  this.playerEl = document.createElement('div');
  this.playerEl.setAttribute('id', this.playerId);
  this.playerContainerEl.appendChild(this.playerEl)

  this.videoId = this.jumbotronEl.getAttribute('data-video-id');
  if (!this.videoId) {
    throw 'data-player-id is required on the jumbotron containing element.';
  }

  this.preloaderContainerEl = this.jumbotronEl.querySelector('.preloader-wrapper');
  this.preloaderEl = this.jumbotronEl.querySelector('.preloader');
  this.videoTrigger = this.jumbotronEl.querySelector('.video-trigger');

  this.playerVars = {
    autoplay: 1,
    controls: 0,
    modestbranding: 1,
    loop: 1,
    playsinline: 1,
    showinfo: 0,
    playlist: this.videoId // See: https://stackoverflow.com/a/25781957/2241124
  }

  return this.initVideo();
};

CRDS.JumbotronVideoPlayer.prototype.constructor = CRDS.JumbotronVideoPlayer;

CRDS.JumbotronVideoPlayer.prototype.initVideo = function() {
  var _this = this;
  this.player = new YT.Player(this.playerId, {
    videoId: this.videoId,
    playerVars: this.playerVars,
    events: {
      onReady: function(event) {
        _this.onVideoReady(event);
      },
      onStateChange: function(event) {
        _this.onVideoStateChange(event);
      }
    }
  });
  this.bindEvents();
};

CRDS.JumbotronVideoPlayer.prototype.onVideoReady = function(event) {
  this.resizePlayer();
  event.target.mute();
};

CRDS.JumbotronVideoPlayer.prototype.onVideoStateChange = function(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    this.preloaderContainerEl.classList.add('loaded');
  } else {
    this.preloaderContainerEl.classList.remove('loaded');
  };
};

CRDS.JumbotronVideoPlayer.prototype.resizePlayer = function() {
  var width = this.jumbotronEl.offsetWidth,
      height = this.jumbotronEl.offsetHeight,
      ratio = 16 / 9;

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

CRDS.JumbotronVideoPlayer.prototype.bindEvents = function() {
  var _this = this;

  window.addEventListener('resize', function(event) {
    _this.resizePlayer();
  }, true);

  this.videoTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    _this.playForegroundVideo();
  }, true);
};

CRDS.JumbotronVideoPlayer.prototype.playForegroundVideo = function() {
  var embedEl = document.createElement('iframe'),
      src = 'https://www.youtube.com/embed/' + this.videoId + '?autoplay=1';

  embedEl.setAttribute('class', 'video-full-size');
  embedEl.setAttribute('src', src);
  embedEl.setAttribute('frameborder', '0');

  this.jumbotronEl.appendChild(embedEl);
  return true;
};
