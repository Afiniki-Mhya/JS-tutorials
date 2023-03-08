const hamburger = document.querySelector(".fa-solid");
const closeBtn = document.querySelector(".fa");
const navLinks = document.querySelector(".nav-links ");

hamburger.addEventListener("click", function () {
  console.log(navLinks.classList);
  const contain = navLinks.classList.contains("show");
  if (contain) {
    navLinks.classList.remove("show");
  } else {
    navLinks.classList.add("show");
  }
});
