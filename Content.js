var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.getElementsByTagName("head")[0].appendChild(script);

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

// setTimeout(function () {
//   window.addEventListener("DOMContentLoaded", (event) => {
//     let source = document.querySelectorAll("source").getAttribute("src");
//     console.log(source);
//   });
// }, 3000);

window.addEventListener("DOMContentLoaded", (event) => {
  let source = document.querySelectorAll("source").getAttribute("src");
  console.log(source);
});
