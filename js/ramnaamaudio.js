document.getElementById("playAudio").addEventListener("click", function () {
  var audio = document.getElementById('testfdgAudio');
  if (this.className == 'is-playing') {
    this.className = "";
    this.innerHTML = "Play"
    audio.pause();
  } else {
    this.className = "is-playing";
    this.innerHTML = "Pause";
    audio.play();
  }

});