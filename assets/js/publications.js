(function() {
  // grab everything once
  const cards       = Array.from(document.querySelectorAll('.publications-grid .card'));
  const yearButtons = document.querySelectorAll('.filter-controls button[data-year]');
  const confButtons = document.querySelectorAll('.filter-controls button[data-conf]');
  let selectedYear  = 'all';
  let selectedConf  = 'all';

  function filterCards() {
    cards.forEach(card => {
      const yearMatch = (selectedYear === 'all' || card.dataset.year === selectedYear);
      const confMatch = (selectedConf === 'all' || card.dataset.conf.toLowerCase() === selectedConf);
      card.style.display = (yearMatch && confMatch) ? '' : 'none';
    });
  }

  function bindButtons() {
    yearButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        yearButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedYear = btn.dataset.year;
        filterCards();
      });
    });
    confButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        confButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedConf = btn.dataset.conf.toLowerCase();
        filterCards();
      });
    });
  }

  function init() {
    bindButtons();
    filterCards();  // show everything for the “all/all” defaults
  }

  // If the DOM is already ready, run immediately; otherwise wait for DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
