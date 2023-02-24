const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// //without using randomNumber as a function
// btn.addEventListener("click", function() {
//   let hexColor = "#";
//   const randomNumber = Math.floor(Math.random() * hex.length);
//   for (i = 0; i < 6; i++) {
//     hexColor += hex[randomNumber];
//   }

//   document.body.style.backgroundColor = hexColor;
//   color.textContent = hexColor;
// });

//when using randomNumber as a function
btn.addEventListener("click", function() {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
    hexColor += hex[randomNumber()];
  }

  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function randomNumber() {
  return Math.floor(Math.random() * hex.length);
}
