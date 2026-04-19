/* ============================================================
   main.js — Everything All At Once
   Handles: rendering, search, filter, sort
   ============================================================ */

/* ── State ─────────────────────────────────────────────────── */
let activeCategory = 'all';
let searchQuery    = '';
let sortMode       = 'default';

/* ── DOM refs ───────────────────────────────────────────────── */
const grid        = document.getElementById('main-content');
const emptyState  = document.getElementById('empty-state');
const searchInput = document.getElementById('search-input');
const sortSelect  = document.getElementById('sort-select');
const resultsLabel = document.getElementById('results-label');
const resetBtn    = document.getElementById('reset-btn');
const filterBtns  = document.querySelectorAll('.filter-btn');

/* ── Favicon URL helper ─────────────────────────────────────── */
function faviconUrl(url) {
  const clean = url.replace(/^https?:\/\//, '').split('/')[0];
  return `https://www.google.com/s2/favicons?domain=${clean}&sz=64`;
}

/* ── Build card HTML ────────────────────────────────────────── */
function buildCard(site) {
  const href  = `https://${site.url}`;
  const tags  = site.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const favUrl = faviconUrl(site.url);

  return `
    <article
      class="card"
      data-category="${site.category}"
      data-name="${site.name.toLowerCase()}"
      data-tags="${site.tags.join(' ').toLowerCase()}"
      data-usecase="${site.useCase.toLowerCase()}"
      role="article"
      aria-label="${site.name}"
    >
      <div class="card-category">${site.category}</div>

      <div class="card-header">
        <div class="card-favicon" aria-hidden="true">
          <img
            src="${favUrl}"
            alt=""
            loading="lazy"
            onerror="this.parentElement.textContent='${site.emoji}'"
          />
        </div>
        <div class="card-name-wrap">
          <div class="card-name" title="${site.name}">${site.name}</div>
          <div class="card-url">${site.url}</div>
        </div>
      </div>

      <p class="card-desc">${site.useCase}</p>

      <div class="card-tags" aria-label="Tags">${tags}</div>

      <div class="card-footer">
        <a
          href="${href}"
          class="visit-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit ${site.name} — opens in new tab"
        >Visit site</a>
      </div>
    </article>
  `;
}

/* ── Filter + sort data ─────────────────────────────────────── */
function getFilteredSites() {
  let sites = [...SITES];

  /* Category filter */
  if (activeCategory !== 'all') {
    sites = sites.filter(s => s.category === activeCategory);
  }

  /* Search */
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    sites = sites.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.tags.some(t => t.toLowerCase().includes(q)) ||
      s.useCase.toLowerCase().includes(q) ||
      s.url.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );
  }

  /* Sort */
  if (sortMode === 'alpha') {
    sites.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortMode === 'alpha-rev') {
    sites.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortMode === 'category') {
    sites.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
  }

  return sites;
}

/* ── Render ─────────────────────────────────────────────────── */
function render() {
  const sites = getFilteredSites();

  if (sites.length === 0) {
    grid.innerHTML = '';
    emptyState.hidden = false;
    emptyState.setAttribute('aria-hidden', 'false');
  } else {
    emptyState.hidden = true;
    emptyState.setAttribute('aria-hidden', 'true');
    grid.innerHTML = sites.map(buildCard).join('');
  }

  /* Update results label */
  resultsLabel.innerHTML = `Showing <strong>${sites.length}</strong> site${sites.length !== 1 ? 's' : ''}`;
}

/* ── Update filter button states ────────────────────────────── */
function syncFilterBtns() {
  filterBtns.forEach(btn => {
    const cat = btn.dataset.category;
    const isActive = cat === activeCategory;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

/* ── Events ─────────────────────────────────────────────────── */

/* Category filter */
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    activeCategory = btn.dataset.category;
    syncFilterBtns();
    render();
    /* Scroll to grid */
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* Search */
let searchDebounce;
searchInput.addEventListener('input', e => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    searchQuery = e.target.value;
    render();
  }, 200);
});

/* Sort */
sortSelect.addEventListener('change', e => {
  sortMode = e.target.value;
  render();
});

/* Reset */
resetBtn.addEventListener('click', () => {
  activeCategory = 'all';
  searchQuery    = '';
  sortMode       = 'default';
  searchInput.value = '';
  sortSelect.value  = 'default';
  syncFilterBtns();
  render();
});

/* ── Keyboard shortcut: / to focus search ───────────────────── */
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.blur();
  }
});

/* ── Category counts in filter buttons ─────────────────────── */
function updateCounts() {
  const countMap = {};
  SITES.forEach(s => {
    countMap[s.category] = (countMap[s.category] || 0) + 1;
  });

  document.getElementById('count-all').textContent = SITES.length;
  document.getElementById('count-edu').textContent = countMap['Career & Education'] || 0;
  document.getElementById('count-des').textContent = countMap['Content Design'] || 0;
  document.getElementById('count-pro').textContent = countMap['Productivity'] || 0;
  document.getElementById('count-uti').textContent = countMap['Utilities'] || 0;
  document.getElementById('count-fun').textContent = countMap['Fun'] || 0;

  document.getElementById('total-count').textContent = `${SITES.length} Sites`;
}

/* ── Init ───────────────────────────────────────────────────── */
updateCounts();
render();

/* ── Intersection Observer: lazy animate on scroll ─────────── */
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );

  /* Re-observe after each render for newly added cards */
  const origRender = render;
  window.render = function() {
    origRender();
    document.querySelectorAll('.card').forEach(card => {
      card.style.animationPlayState = 'paused';
      observer.observe(card);
    });
  };

  window.render();
}
