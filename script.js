const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
const empty = document.getElementById('gridEmpty');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const kind = chip.dataset.filter;

    chips.forEach((btn) => {
      const active = btn === chip;
      btn.classList.toggle('is-on', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    let visibleCount = 0;
    cards.forEach((card) => {
      const match = kind === 'all' || card.dataset.kind === kind;
      card.classList.toggle('is-hidden', \!match);
      if (match) visibleCount += 1;
    });

    if (empty) empty.hidden = visibleCount > 0;
  });
});
