
var sample_size = 12;
var scalefactor = 1;
var threshold = 40;
var referenceFrame = [];
var newMotion = true;

var arrayToPaint = [];

function motionDetection(video, videoCanvas, paintingCanvas) {
    // draw the video and get its pixels
    let hiddenCtx = videoCanvas.getContext('2d');
    let publicCtx = paintingCanvas.getContext('2d');
    let logo = document.querySelector('.logo')
    let shadowColor = window.getComputedStyle(logo).borderColor;

    hiddenCtx.drawImage(video, 0, 0, videoCanvas.width, videoCanvas.height);
    var videoData = hiddenCtx.getImageData(0, 0, videoCanvas.width, videoCanvas.height).data;

    // we can now loop over all the pixels of the video
    for (var y = 0; y < videoCanvas.height; y+= sample_size) {
      for (var x = 0; x < videoCanvas.width; x+= sample_size) {
        var pos = (x + y * videoCanvas.width) * 4;
        var r = videoData[pos];

        if (referenceFrame[pos] && Math.abs(referenceFrame[pos] - r) > threshold) {
          publicCtx.fillStyle = shadowColor;
          publicCtx.font = '15px FamiljenWTF';
          publicCtx.textBaseline = 'middle';
          publicCtx.fillText('F', x * -1, y, sample_size, sample_size);
          publicCtx.scale(-1, 1);

          if (newMotion) {
            newMotion = false;
            // set timeout to reset newMotion
            setTimeout(() => {
                newMotion = true;
            }, 30000);
            greeting(); 
          }
        } else {
          publicCtx.fillStyle = '#000';
          publicCtx.fillRect(x, y, sample_size, sample_size);
        }
        referenceFrame[pos] = r;
      }
    }
}