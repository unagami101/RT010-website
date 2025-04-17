
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

let currentSlide = 0;
const slides = document.getElementById('slideContainer');
const totalSlides = slides.children.length;

function showSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
