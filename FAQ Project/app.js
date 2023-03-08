//trasversing the DOM
const btns = document.querySelectorAll(".fa");
const text = document.querySelector(".question");

btns.forEach(function (plusMinus) {
  plusMinus.addEventListener("click", function (e) {
    console.log(e.currentTarget.parentElement.parentElement);
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-answer");
  });
  const contains = text.classList.contains('show-answer')
    if(contains !== text){
        text.classList.remove('show-answer')
    }

});
