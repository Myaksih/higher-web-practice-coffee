const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('[data-nav]');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });
}
