let source = document.querySelector("source").getAttribute("src");
console.log(source);

var delay = 1000;
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

setTimeout(function () {
  closeFullscreen();
  const dimmer = document.querySelector("#dimmer");
  if (dimmer.classList.contains("visible")) {
    dimmer.classList.remove("visible");
  }
  const qtiContent = document.querySelector("#qti-content");
  if (qtiContent.classList.contains("disabled")) {
    qtiContent.classList.remove("disabled");
  }
}, delay);
