function startCamFeed(videoElement) {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then( function(stream) {
        if ('srcObject' in videoElement) {
          videoElement.srcObject = stream;
        } else {
          videoElement.src = URL.createObjectURL(stream);
        }
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  } else {
    console.error('cam not supported');
  }
}


