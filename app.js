const navLinks = document.querySelectorAll('.nav-item');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

// test
const cards = document.querySelectorAll(".testimonial-card");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let interval;

// create dots dynamically
cards.forEach((_, index) => {
  const dot = document.createElement("button");
  if (index === 0) dot.classList.add("active"); // start active
  dot.addEventListener("click", () => {
    showCard(index);
    resetAutoSlide(); // restart autoplay when user clicks
  });
  dotsContainer.appendChild(dot);
});

// function to show selected testimonial
function showCard(index) {
  currentIndex = index;
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
  document.querySelectorAll(".dots button").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// autoplay every 3s
function autoSlide() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

function resetAutoSlide() {
  clearInterval(interval);
  interval = setInterval(autoSlide, 3500); // 3 seconds
}

// init
showCard(0);
interval = setInterval(autoSlide, 3500);


// faq questions
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqAnswer = button.nextElementSibling;

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    } else {
      faqAnswer.style.maxHeight = 0;
    }
  });
});