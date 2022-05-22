let source = document.querySelector("source").getAttribute("src");
console.log(source);

var delay = 1000;
const dimmer = document.querySelector("#dimmer");
if (dimmer.classList.contains("visible")) {
  dimmer.classList.remove("visible");
}
const qtiContent = document.querySelector("#qti-content");
if (qtiContent.classList.contains("disabled")) {
  qtiContent.classList.remove("disabled");
}
