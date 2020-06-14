const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");
const description = document.querySelector(".description");
const actionButton[] = document.querySelectorAll(".actions button");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
  description.classList.toggle("clamp");
});

actionButton.addEventListener("click", () => {
  actionButton.classList.toggle("active");
});
