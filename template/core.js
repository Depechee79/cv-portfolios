/* core.js - CV Portfolio Core Script */
/* This file is generated - translations come from config.json */

// TRANSLATIONS - Injected by generate.js
const translations = {{TRANSLATIONS}};

// DARK SECTIONS - Injected by generate.js
const darkSections = {{DARK_SECTIONS}};

// EXPANDABLE TIMELINE LOGIC
window.toggleTimeline = function (id, btn) {
    const container = document.getElementById(id);
    const isCollapsed = container.classList.contains('collapsed');
    const currentLang = localStorage.getItem('preferredLang') || 'es';

    if (isCollapsed) {
        // EXPAND
        container.classList.remove('collapsed');
        container.classList.add('expanded');

        const span = btn.querySelector('span');
        const icon = btn.querySelector('ion-icon');
        if (span) span.textContent = translations[currentLang]["btn.collapse"] || "Cerrar";
        if (icon) icon.setAttribute('name', 'chevron-up-outline');

        container.scrollTop = 0;

        // Check if content needs scrolling (scrollHeight > clientHeight)
        // Small delay to let the DOM update after class change
        setTimeout(() => {
            const needsScroll = container.scrollHeight > container.clientHeight + 10;

            if (needsScroll) {
                // Content overflows: keep overscroll-behavior-y: contain (from CSS)
                // and add scroll listener for auto-collapse at bottom
                container.style.overscrollBehaviorY = 'contain';
                let scrollTimeout = null;
                container._scrollEndHandler = function() {
                    if (scrollTimeout) clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        const scrollBottom = container.scrollTop + container.clientHeight;
                        const scrollMax = container.scrollHeight;
                        if (scrollBottom >= scrollMax - 5) {
                            collapseAndScrollNext(container, btn);
                        }
                    }, 800);
                };
                container.addEventListener('scroll', container._scrollEndHandler);
            } else {
                // Content fits without scrolling: allow scroll events to
                // propagate to #app-scroller so snap navigation continues
                container.style.overscrollBehaviorY = 'auto';
            }
        }, 50);
    } else {
        // COLLAPSE
        collapseTimeline(container, btn);
    }
};

function collapseTimeline(container, btn) {
    const currentLang = localStorage.getItem('preferredLang') || 'es';

    container.classList.add('collapsed');
    container.classList.remove('expanded');

    // Remove scroll listener and reset overscroll override
    if (container._scrollEndHandler) {
        container.removeEventListener('scroll', container._scrollEndHandler);
        container._scrollEndHandler = null;
    }
    container.style.overscrollBehaviorY = '';

    const span = btn.querySelector('span');
    const icon = btn.querySelector('ion-icon');
    if (span) span.textContent = translations[currentLang]["btn.expand"] || "Ver todo";
    if (icon) icon.setAttribute('name', 'chevron-down-outline');

    container.scrollTop = 0;
}

function collapseAndScrollNext(container, btn) {
    // First, collapse the timeline
    collapseTimeline(container, btn);

    // Find the parent section
    const section = container.closest('section');
    if (!section) return;

    // Find the next sibling section
    const nextSection = section.nextElementSibling;
    if (nextSection && (nextSection.tagName === 'SECTION' || nextSection.tagName === 'FOOTER')) {
        // Small delay to let collapse animation start
        setTimeout(() => {
            nextSection.scrollIntoView({ behavior: 'auto', block: 'start' });
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher
    let currentLang = localStorage.getItem('preferredLang') || 'es';
    updateLanguage(currentLang);

    // Lang Switcher Interaction
    const langSwitcher = document.querySelector('.lang-switcher-bottom');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', function (e) {
            const targetBtn = e.target.closest('.lang-btn-bottom');
            if (!targetBtn) return;

            if (this.classList.contains('expanded')) {
                if (!targetBtn.classList.contains('active')) {
                    const selectedLang = targetBtn.getAttribute('data-lang');
                    if (selectedLang) {
                        currentLang = selectedLang;
                        updateLanguage(currentLang);
                    }
                }
                this.classList.remove('expanded');
            } else {
                this.classList.add('expanded');
            }
        });

        document.addEventListener('click', function (e) {
            if (!langSwitcher.contains(e.target)) {
                langSwitcher.classList.remove('expanded');
            }
        });
    }

    // BURGER MENU LOGIC
    window.toggleBurgerMenu = function () {
        const burgerBtn = document.getElementById('burger-btn');
        const menuOverlay = document.getElementById('menu-overlay');
        const cutleryBurger = burgerBtn ? burgerBtn.querySelector('.cutlery-burger') : null;
        const bottomNav = document.querySelector('.bottom-nav');
        if (!burgerBtn || !menuOverlay) return;

        menuOverlay.classList.toggle('open');
        if (cutleryBurger) {
            cutleryBurger.classList.toggle('burger-open');
        }
        // Toggle gold colors when menu overlay is open (dark background)
        if (bottomNav) {
            bottomNav.classList.toggle('menu-open', menuOverlay.classList.contains('open'));
        }
    };

    // Close menu on link click — scroll within #app-scroller
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const menuOverlay = document.getElementById('menu-overlay');
            const burgerBtn = document.getElementById('burger-btn');
            const bottomNav = document.querySelector('.bottom-nav');
            if (menuOverlay) menuOverlay.classList.remove('open');
            if (burgerBtn) {
                const cutleryBurger = burgerBtn.querySelector('.cutlery-burger');
                if (cutleryBurger) cutleryBurger.classList.remove('burger-open');
            }
            if (bottomNav) bottomNav.classList.remove('menu-open');

            // Scroll to section within #app-scroller
            const targetId = link.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        });
    });

    // Handle CTA button scroll within #app-scroller
    const ctaBtn = document.querySelector('.btn-primary[href="#contact"]');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
        });
    }

    // Set initial nav color
    if (document.querySelector('.bottom-nav')) {
        document.querySelector('.bottom-nav').style.setProperty('--nav-adaptive-color', 'rgb(28,28,28)');
    }
});

// Adaptive nav colors — scroll-synced loop
function _navColorTick() {
    var nav = document.querySelector('.bottom-nav');
    var scroller = document.getElementById('app-scroller');
    if (!nav || !scroller) return;
    if (nav.classList.contains('menu-open')) return;

    var rect = scroller.getBoundingClientRect();
    var viewH = rect.height;
    if (viewH <= 0) return;

    var sections = document.querySelectorAll('header, section, footer');
    var dark = 0;

    for (var i = 0; i < sections.length; i++) {
        var s = sections[i];
        var sr = s.getBoundingClientRect();
        var vt = Math.max(sr.top, rect.top);
        var vb = Math.min(sr.bottom, rect.bottom);
        var vh = vb - vt;
        if (vh > 0 && darkSections.indexOf(s.id) !== -1) {
            dark += vh / viewH;
        }
    }

    dark = Math.min(1, Math.max(0, dark));
    var r = Math.round(28 + 156 * dark);
    var g = Math.round(28 + 121 * dark);
    var b = Math.round(28 + 78 * dark);
    nav.style.setProperty('--nav-adaptive-color', 'rgb(' + r + ',' + g + ',' + b + ')');
}
setInterval(_navColorTick, 16);

// Snap-visible detection
var _lastVisibleSection = null;
function _snapVisibleTick() {
    var scroller = document.getElementById('app-scroller');
    if (!scroller) return;

    var scrollerRect = scroller.getBoundingClientRect();
    var centerY = scrollerRect.top + scrollerRect.height / 2;

    var sections = document.querySelectorAll('header, section, footer');
    var bestSection = null;
    var bestOverlap = 0;

    for (var i = 0; i < sections.length; i++) {
        var s = sections[i];
        var sr = s.getBoundingClientRect();
        var vt = Math.max(sr.top, scrollerRect.top);
        var vb = Math.min(sr.bottom, scrollerRect.bottom);
        var vh = vb - vt;

        if (vh > bestOverlap) {
            bestOverlap = vh;
            bestSection = s;
        }
    }

    if (bestSection && bestSection !== _lastVisibleSection) {
        if (_lastVisibleSection) {
            _lastVisibleSection.classList.remove('snap-visible');
        }
        bestSection.classList.add('snap-visible');
        _lastVisibleSection = bestSection;

        // Auto-collapse timelines when leaving experience/education sections
        if (bestSection &&
            (bestSection.id === 'experience' || bestSection.id === 'education')) {
            // Do nothing, user is viewing this section
        } else {
            var expandedTimelines = document.querySelectorAll('.timeline-container.expanded');
            expandedTimelines.forEach(function(tl) {
                var btn = tl.parentElement.querySelector('.btn-expand');
                if (btn) {
                    collapseTimeline(tl, btn);
                }
            });
        }
    }
}
setInterval(_snapVisibleTick, 100);

function updateLanguage(lang) {
    if (!translations[lang]) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update active button
    document.querySelectorAll('.lang-btn-bottom').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Save preference
    localStorage.setItem('preferredLang', lang);
}
