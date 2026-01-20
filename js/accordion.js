const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', (evt) => {
    const button = evt.target.closest('.accordion__button');
    if (!button) return;

    const panelId = button.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));

    if (!isExpanded) {
      // открыть
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      // закрыть
      panel.style.maxHeight = '0px';
    }
  });
});
