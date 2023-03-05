const review = [
  {
    id: 1,
    name: "Susan Doe",
    job: "UX Designer",
    img: "https://cdn.pixabay.com/photo/2023/02/13/05/58/doodle-7786568_640.png",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    name: "Mike John",
    job: "Photographer",
    img: "https://cdn.pixabay.com/photo/2023/01/23/09/26/cat-7738210_640.jpg",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 3,
    name: "John Doe",
    job: "Web Designer",
    img: "https://cdn.pixabay.com/photo/2023/02/07/00/25/relaxed-7772958_640.jpg",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
  },
  {
    id: 4,
    name: "Prince Charles",
    job: "Engineer",
    img: "https://cdn.pixabay.com/photo/2022/09/07/17/26/vintage-pocket-watch-7439233_640.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
];

const img = document.getElementById("person-img");
const aurthor = document.getElementById("aurthor");
const job = document.getElementById("job");
const info = document.getElementById("info");

//targetting the buttons
const previous = document.querySelector("#previous-btn");
const next = document.querySelector("#next-btn");
const randomBtn = document.querySelector(".random-btn");

//set initial value
let currentItem = 0;

//load the initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(details) {
  const item = review[details];
  img.src = item.img;
  aurthor.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
//next review
next.addEventListener("click", function () {
  currentItem++;
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
//previous review
previous.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson(currentItem);
});
 //random review (CHALLENGE)
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * review.length);
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson(currentItem);
});

//WELDONE NIKI!!!