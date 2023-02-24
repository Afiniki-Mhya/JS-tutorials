//set initial count value
let count = 0;
const value = document.getElementById("value");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const btns = document.querySelectorAll(".btn");

//when targeting the btns all at once:
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    console.log(e.currentTarget.classList);
    if (style.contains("decrease")) {
      count--;
    }
    if (style.contains("increase")) {
      count++;
    }
    if (style.contains("reset")) {
      count = 0;
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count === 0) {
      value.style.color = "#000";
    }
    value.textContent = count;
    console.log(style);
  });
});
