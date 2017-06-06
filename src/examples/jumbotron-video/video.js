// Load the YouTube iframe API and insert into the page.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {

  if (document.readyState != 'complete') {
    setTimeout(onYouTubeIframeAPIReady, 100);
    return true;
  }

  var videoId = 'DzlH5SDGoyA',
      playerId = 'crds-bg-video',
      playerEl = document.getElementById(playerId),
      playerContainerEl = playerEl.parentElement,
      jumbotronEl = playerContainerEl.parentElement,
      preloaderEl = jumbotronEl.querySelector('.preloader-wrapper'),
      videoTrigger = jumbotronEl.querySelector('.video-trigger');

  var player = new YT.Player(playerId, {
    videoId: videoId, // the ID of the YouTube video
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      loop: 1,
      playsinline: 1,
      showinfo: 0,
      playlist: videoId // See: https://stackoverflow.com/a/25781957/2241124
    },
    events: {
      onReady: function(e) {
        resizeVideo();
        e.target.mute();
      },
      onStateChange: function(e) {
        if (e.data == YT.PlayerState.PLAYING) {
          preloaderEl.classList.add('loaded');
        } else {
          preloaderEl.classList.remove('loaded');
        }
      }
    }
  });

  // Control the size of the player so it fills the background.
  var resizeVideo = function() {
    var width = jumbotronEl.offsetWidth,
        height = jumbotronEl.offsetHeight,
        ratio = 16 / 9;

    // If the container is wider than the desired ratio ...
    if (width / height > ratio) {
      // The new width should be the width of the container,
      // while the new height maintains the aspect ratio.
      var newWidth = width,
          newHeight = width / ratio;

      // Resize the player.
      player.setSize(newWidth, newHeight);

      // The player's container should sit at the left,
      // and at half of its excess height.
      playerContainerEl.style.left = 0;
      playerContainerEl.style.top = -((newHeight - height) / 2) + 'px';
    }
    // If the player is higher than the aspect ratio
    else {
      // The new height should be the height of the container,
      // while the new width maintains the aspect ratio.
      var newHeight = height;
          newWidth = height * ratio,

      // Resize the player.
      player.setSize(newWidth, newHeight);

      // The player's container should sit at the top,
      // and at half of its excess width.
      playerContainerEl.style.top = 0;
      playerContainerEl.style.left = -((newWidth - width) / 2) + 'px';
    }
  }

  // Watch for changes to the window's size and reset the video height.
  window.addEventListener('resize', resizeVideo, true);

  // Overlay an embedded iframe player when clicking the trigger.
  videoTrigger.addEventListener('click', function(event) {
    event.preventDefault();

    var embedEl = document.createElement('iframe');
    embedEl.setAttribute('class', 'video-full-size');
    embedEl.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1');
    embedEl.setAttribute('frameborder', '0');

    jumbotronEl.appendChild(embedEl);
    return true;
  }, true);
}
