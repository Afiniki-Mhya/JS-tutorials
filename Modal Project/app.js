const closeBtn = document.querySelector(".fa-solid");
const modalBtn = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function () {
  overlay.classList.add("open-modal");
  console.table(modalBtn.classList);
});
closeBtn.addEventListener("click", function () {
  overlay.classList.remove("open-modal");
  console.table(closeBtn.classList);
});
