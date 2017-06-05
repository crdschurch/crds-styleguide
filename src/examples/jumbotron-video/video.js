// Load the YouTube iframe API and insert into the page.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// playerId needs to match the ID of the player in the HTML file.
var playerId = 'crds-bg-video';

function onYouTubeIframeAPIReady() {
  player = new YT.Player(playerId, {
    videoId: 'DzlH5SDGoyA', // the ID of the YouTube video
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      loop: 1,
      playsinline: 1,
      showinfo: 0,
      playlist: 'DzlH5SDGoyA' // See: https://stackoverflow.com/a/25781957/2241124
    },
    events: {
      onReady: function(e) {
        resizeVideo();
        e.target.mute();
      }
    }
  });

  // Control the size of the player so it fills the background.
  var resizeVideo = function() {
    var playerEl = document.getElementById(playerId),
        el = playerEl.parentElement,
        containerEl = el.parentElement;
        width = containerEl.offsetWidth,
        height = containerEl.offsetHeight,
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
      el.style.left = 0;
      el.style.top = -((newHeight - height) / 2) + 'px';
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
      el.style.top = 0;
      el.style.left = -((newWidth - width) / 2) + 'px';
    }
  }

  // Watch for changes to the window's size and reset the video height.
  window.addEventListener('resize', resizeVideo, true);
}
