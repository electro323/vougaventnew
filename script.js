let slidesContainer = document.querySelector(".slides");
let slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

  // move image first
  index++;
  if (index >= slides.length) index = 0;

  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  // remove active immediately
  slides.forEach(slide => slide.classList.remove("active"));

  // ADD DELAY for text animation (important)
  setTimeout(() => {
    slides[index].classList.add("active");
  }, 500); // adjust 400–600ms

}, 4000);


