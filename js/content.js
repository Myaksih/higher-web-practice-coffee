document.addEventListener('DOMContentLoaded', () => {
  const heroImg = document.querySelector('[data-hero-img]');
  if (heroImg) {
    heroImg.src = './assets/hero/main.png';
  }


  const mapImg = document.querySelector('[data-map-img]');
  if (mapImg) {
    mapImg.src = './assets/contacts/map.png';
  }

  const menuMap = {
    espresso: './assets/menu/espresso.png',
    americano: './assets/menu/americano.png',
    cappuccino: './assets/menu/cappuccino.png',
    filter: './assets/menu/filter.png',
    coldbrew: './assets/menu/coldbrew.png',
  };

  document.querySelectorAll('[data-menu-img]').forEach((img) => {
    const key = img.getAttribute('data-menu-img');
    const src = menuMap[key];
    if (src) img.src = src;
  });


  const promoMap = {
    '1': './assets/promotions/promo-1.png',
    '2': './assets/promotions/promo-2.png',
    '3': './assets/promotions/promo-3.png',
  };

  document.querySelectorAll('[data-promo-img]').forEach((img) => {
    const key = img.getAttribute('data-promo-img');
    const src = promoMap[key];
    if (src) img.src = src;
  });
});
