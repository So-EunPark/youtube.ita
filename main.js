const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");
const description = document.querySelector(".description");
const actionButton = document.querySelectorAll("button.thumb");
const subscribe = document.querySelector(".subscribe");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
  description.classList.toggle("clamp");
});

[].forEach.call(actionButton, function (a) {
  a.addEventListener("click", actionButtonClick, false);
});

function actionButtonClick(e) {
  this.classList.toggle("active");
}

subscribe.addEventListener("click", () => {
  subscribe.classList.toggle("clicked");
});
