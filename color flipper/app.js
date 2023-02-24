const colors = [
  "#77ACF1",
  "pink",
  "blue",
  "rgba(245, 40, 145, 0.8)",
  "#3EDBF0",
  "#C0FEFC",
  "#04009A",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //generate random colors btwn 0 and 3

  const randomNumber = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  console.log(randomNumber);
});

// const n = { name: "Afiniki", age: 39 };
// n["name"];
// const o = Object.entries(n)
// console.log(o)
