// Initialize and manage a cross-page loading overlay
(function() {
  const LOADER_ID = 'page-loader';
  let loaderEl;

  function ensureLoader() {
    loaderEl = document.getElementById(LOADER_ID);
    if (!loaderEl) {
      loaderEl = document.createElement('div');
      loaderEl.id = LOADER_ID;
      loaderEl.className = 'page-loader hidden';
      loaderEl.setAttribute('aria-live', 'polite');
      loaderEl.setAttribute('aria-busy', 'true');
      loaderEl.innerHTML = '<div class="spinner" aria-hidden="true"></div><p class="loader-text">Loading...</p>';
      document.body.appendChild(loaderEl);
    }
    return loaderEl;
  }

  function showPageLoader() {
    ensureLoader();
    loaderEl.classList.remove('hidden');
    document.body.classList.add('loading');
    loaderEl.setAttribute('aria-busy', 'true');
  }

  function hidePageLoader() {
    if (!loaderEl) loaderEl = document.getElementById(LOADER_ID);
    if (!loaderEl) return;
    loaderEl.classList.add('hidden');
    document.body.classList.remove('loading');
    loaderEl.setAttribute('aria-busy', 'false');
  }

  function shouldInterceptLink(a) {
    const url = new URL(a.href, window.location.href);
    const sameOrigin = url.origin === window.location.origin;
    const isHashOnly = url.pathname === window.location.pathname && url.hash && a.href.endsWith(url.hash);
    const newTab = a.target && a.target.toLowerCase() !== '' && a.target.toLowerCase() !== '_self';
    const download = a.hasAttribute('download');
    return sameOrigin && !isHashOnly && !newTab && !download;
  }

  function initPageLoader() {
    // ensure the loader element exists early
    ensureLoader();

    // Hide loader when page is fully loaded (with a small delay for smoothness)
    window.addEventListener('load', function() {
      setTimeout(hidePageLoader, 5000);
    });

    // Show loader on same-origin navigation
    document.addEventListener('click', function(e) {
      const a = e.target.closest('a[href]');
      if (!a) return;
      if (!shouldInterceptLink(a)) return;
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      showPageLoader();
    }, true);

    // Fallback for programmatic or non-click navigations
    window.addEventListener('beforeunload', function() {
      showPageLoader();
    });

    // Hide loader if page is restored from cache (bfcache)
    window.addEventListener('pageshow', function(ev) {
      if (ev.persisted) {
        setTimeout(hidePageLoader, 0);
      }
    });
  }

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPageLoader);
  } else {
    initPageLoader();
  }

  // Optional: expose helpers
  window.PageLoader = {
    show: showPageLoader,
    hide: hidePageLoader,
  };
})();