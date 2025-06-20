document.addEventListener('DOMContentLoaded', () => {
    const cards       = Array.from(document.querySelectorAll('.publications-grid .card'));
    let selectedYear  = 'all';
    let selectedConf  = 'all';
  
    const yearButtons = document.querySelectorAll('.filter-controls button[data-year], .filter-controls button[value="all"]');
    const confButtons = document.querySelectorAll('.filter-controls button[data-conf]');
  
    function filterCards() {
      cards.forEach(card => {
        const yearMatch = (selectedYear === 'all' || card.dataset.year === selectedYear);
        const confMatch = (selectedConf === 'all' || card.dataset.conf.toLowerCase() === selectedConf);
        card.style.display = (yearMatch && confMatch) ? '' : 'none';
      });
    }
  
    yearButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // update active styling
        yearButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // read selected year (data-year or value)
        selectedYear = btn.dataset.year || btn.value || 'all';
        filterCards();
      });
    });
  
    confButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // update active styling
        confButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // read selected conf
        selectedConf = btn.dataset.conf.toLowerCase();
        filterCards();
      });
    });
  
    // initial filter on page load
    filterCards();
  });