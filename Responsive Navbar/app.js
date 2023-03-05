const hamburger = document.querySelector(".fa-solid ");
const links = document.querySelector(".nav-links");

// hamburger.addEventListener("click", function () {

// });
hamburger.addEventListener("click", function (e) {
  const contains = links.classList.contains("show");
//   console.log({contains})
console.table({contains})
  if (contains) {
    links.classList.remove("show");
  } else {
    links.classList.add("show");
  }

});
