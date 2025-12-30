// Page Routing - Redirect all non-existent pages to 404
(function() {
    // Only allow these HTML pages
    const allowedPages = ['index.html', 'home2.html', '404.html'];
    
    // Get current page path
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || '';
    const isRootPath = currentPath === '/' || currentPath.endsWith('/') || currentPage === '';
    
    // Skip if already on 404 page to prevent redirect loop
    if (currentPage === '404.html') {
        return;
    }
    
    // List of allowed static file extensions (assets that should load normally)
    const allowedExtensions = [
        '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp',
        '.woff', '.woff2', '.ttf', '.eot', '.json', '.xml', '.pdf', '.zip',
        '.mp4', '.webm', '.mp3', '.wav', '.map', '.woff2'
    ];
    
    // Check if it's a static asset (has allowed extension)
    const isStaticAsset = allowedExtensions.some(ext => currentPage.toLowerCase().endsWith(ext));
    
    // Allow root path (which loads index.html)
    if (isRootPath) {
        return;
    }
    
    // Allow static assets
    if (isStaticAsset) {
        return;
    }
    
    // Allow only specific pages
    if (allowedPages.includes(currentPage)) {
        return;
    }
    
    // If we get here, it's an invalid page - redirect to 404
    // This catches:
    // - Any .html page that's not in allowedPages (e.g., about.html, contact.html, products.html)
    // - Any path without extension that's not root (e.g., /random-page, /shop, /about)
    // - Any other page requests
    window.location.replace('404.html');
})();

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString() + '+';
        }
    }, 16);
}

// Initialize counter animations
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => statsObserver.observe(stat));
});

// Product Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add to cart button - redirect to 404
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '404.html';
        });
    });
    
    // Quick view button - redirect to 404
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '404.html';
        });
    });
});

// Smooth Scroll for Anchor Links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Newsletter Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const button = this.querySelector('button');
            
            if (emailInput.value) {
                const originalText = button.textContent;
                button.textContent = 'Subscribed!';
                button.style.background = '#10b981';
                emailInput.value = '';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 3000);
            }
        });
    }
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Parallax Effect for Hero (Subtle)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero:not(.hero-alt)');
    
    if (hero && scrolled < hero.offsetHeight) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight);
        }
    }
});

// Category Card Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.category-icon');
            if (icon) {
                icon.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    icon.style.animation = 'float 3s ease-in-out infinite';
                }, 500);
            }
        });
    });
});

// Loading Animation (if needed)
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});


// REMOVE: previous "initMapModal" DOMContentLoaded block
// REMOVE: previous undefined setupMapModal() invocation block
// REMOVE: previous "EDIT: footer address -> open small map modal" DOMContentLoaded block

// ADD: unified map modal setup with centered overlay
function setupMapModal() {
    const addressEl = document.getElementById('footerAddress');
    const modalEl = document.getElementById('mapModal');
    const frameEl = document.getElementById('mapFrame');
    const closeBtn = document.getElementById('mapClose');
    const backdropEl = document.getElementById('mapBackdrop');

    if (!addressEl || !modalEl || !frameEl) return;

    // Center the modal as a small overlay
    Object.assign(modalEl.style, {
        position: 'fixed',
        inset: '0',
        display: 'none',            // hidden by default
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.5)',
        zIndex: '1000'
    });

    // Size the map small and nicely styled
    Object.assign(frameEl.style, {
        width: '90%',
        maxWidth: '600px',
        height: '60vh',
        maxHeight: '420px',
        border: '0',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
        background: '#fff'
    });

    function openMap() {
        const query = (addressEl.textContent || '').trim();
        const src = 'https://www.google.com/maps?q=' + encodeURIComponent(query) + '&output=embed';

        frameEl.setAttribute('src', src);
        frameEl.setAttribute('title', 'Map: ' + query);

        modalEl.setAttribute('aria-hidden', 'false');
        modalEl.style.display = 'flex'; // show centered
        document.body.style.overflow = 'hidden';

        if (closeBtn) closeBtn.focus();
    }

    function closeMap() {
        modalEl.setAttribute('aria-hidden', 'true');
        modalEl.style.display = 'none';
        frameEl.removeAttribute('src'); // stop background network
        document.body.style.overflow = '';

        // return focus to the address for accessibility
        addressEl.focus();
    }

    // Make the address element keyboard-accessible
    addressEl.setAttribute('role', 'link');
    addressEl.setAttribute('tabindex', '0');
    addressEl.setAttribute('aria-label', 'Open map for address');

    addressEl.addEventListener('click', openMap);
    addressEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openMap();
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMap);
    if (backdropEl) backdropEl.addEventListener('click', closeMap);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalEl.getAttribute('aria-hidden') === 'false') {
            closeMap();
        }
    });
}

// Initialize after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupMapModal);
} else {
    setupMapModal();
}

