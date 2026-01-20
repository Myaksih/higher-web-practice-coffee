const carousel = document.querySelector('[data-carousel]');
const track = carousel.querySelector('[data-carousel-track]');
const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
const prevButton = carousel.querySelector('[data-carousel-prev]');
const nextButton = carousel.querySelector('[data-carousel-next]');
const bulletsContainer = carousel.querySelector('[data-carousel-bullets]');

let currentSlide = 0;

slides.forEach((_, index) => {
  const bullet = document.createElement('button');
  bullet.classList.add('carousel__bullet');
  bullet.setAttribute('type', 'button');
  bullet.setAttribute('aria-label', `Перейти к слайду ${index + 1}`);
  
  if (index === 0) {
    bullet.classList.add('carousel__bullet--active');
  }
  
  bullet.addEventListener('click', () => goToSlide(index));
  bulletsContainer.appendChild(bullet);
});

const bullets = Array.from(bulletsContainer.querySelectorAll('.carousel__bullet'));

function goToSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  bullets.forEach((bullet, i) => {
    bullet.classList.toggle('carousel__bullet--active', i === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);