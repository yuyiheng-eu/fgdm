// More Works Dropdown Functionality
function toggleMoreWorks() {
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');

    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    } else {
        dropdown.classList.add('show');
        button.classList.add('active');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const container = document.querySelector('.more-works-container');
    const dropdown = document.getElementById('moreWorksDropdown');
    const button = document.querySelector('.more-works-btn');

    if (container && !container.contains(event.target)) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Close dropdown on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const dropdown = document.getElementById('moreWorksDropdown');
        const button = document.querySelector('.more-works-btn');
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Copy BibTeX to clipboard
function copyBibTeX() {
    const bibtexElement = document.getElementById('bibtex-code');
    const button = document.querySelector('.copy-bibtex-btn');
    const copyText = button.querySelector('.copy-text');

    if (bibtexElement) {
        navigator.clipboard.writeText(bibtexElement.textContent).then(function() {
            button.classList.add('copied');
            copyText.textContent = 'Copied';
            setTimeout(function() {
                button.classList.remove('copied');
                copyText.textContent = 'Copy';
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
            const textArea = document.createElement('textarea');
            textArea.value = bibtexElement.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            button.classList.add('copied');
            copyText.textContent = 'Copied';
            setTimeout(function() {
                button.classList.remove('copied');
                copyText.textContent = 'Copy';
            }, 2000);
        });
    }
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollButton.classList.add('visible');
    } else {
        scrollButton.classList.remove('visible');
    }
});

// Video carousel autoplay when in view
function setupVideoCarouselAutoplay() {
    const carouselVideos = document.querySelectorAll('.results-carousel video');
    if (carouselVideos.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    carouselVideos.forEach(video => {
        observer.observe(video);
    });
}

// Generate video elements dynamically
function generateVideoCarousel() {
    const videoFiles = [
        "01April_2010_Thursday_tagesschau-4329.mp4",
        "01April_2010_Thursday_tagesschau-4330.mp4",
        "01April_2010_Thursday_tagesschau-4331.mp4",
        "01April_2011_Friday_tagesschau-3374.mp4",
        "01April_2011_Friday_tagesschau-3377.mp4",
        "01April_2011_Friday_tagesschau-3387.mp4",
        "01December_2011_Thursday_heute-3058.mp4",
        "01December_2011_Thursday_heute-3060.mp4",
        "01December_2011_Thursday_tagesschau-3473.mp4",
        "01September_2010_Wednesday_tagesschau-5039.mp4",
        "02November_2010_Tuesday_heute-2754.mp4",
        "02November_2010_Tuesday_tagesschau-2031.mp4",
        "02November_2010_Tuesday_tagesschau-2039.mp4",
        "02October_2009_Friday_tagesschau-1362.mp4",
        "02October_2012_Tuesday_tagesschau-2847.mp4",
        "03February_2010_Wednesday_heute-2362.mp4",
        "03February_2010_Wednesday_tagesschau-2054.mp4",
        "03February_2011_Thursday_tagesschau-938.mp4",
        "03July_2009_Friday_tagesschau-2008.mp4",
        "04April_2010_Sunday_tagesschau-4574.mp4",
        "05November_2010_Friday_tagesschau-1872.mp4",
        "06February_2010_Saturday_tagesschau-7365.mp4",
        "08January_2010_Friday_tagesschau-3981.mp4",
        "10January_2011_Monday_tagesschau-6404.mp4",
        "12May_2010_Wednesday_tagesschau-323.mp4",
        "14April_2010_Wednesday_tagesschau-3809.mp4",
        "15September_2010_Wednesday_tagesschau-5210.mp4",
        "16December_2009_Wednesday_tagesschau-5907.mp4",
        "16June_2010_Wednesday_tagesschau-8148.mp4",
        "17July_2009_Friday_tagesschau-5101.mp4",
        "20May_2010_Thursday_tagesschau-3151.mp4",
        "20November_2009_Friday_tagesschau-6560.mp4",
        "20November_2009_Friday_tagesschau-6562.mp4",
        "20November_2009_Friday_tagesschau-6566.mp4",
        "21May_2010_Friday_tagesschau-5097.mp4",
        "22April_2010_Thursday_tagesschau-3736.mp4",
        "22April_2010_Thursday_tagesschau-3738.mp4",
        "22August_2010_Sunday_tagesschau-1345.mp4",
        "23December_2010_Thursday_tagesschau-1430.mp4",
        "23January_2011_Sunday_tagesschau-7823.mp4",
        "24October_2010_Sunday_tagesschau-2908.mp4",
        "25August_2010_Wednesday_tagesschau-8507.mp4",
        "25January_2011_Tuesday_tagesschau-2993.mp4",
        "25March_2011_Friday_tagesschau-5828.mp4",
        "25October_2010_Monday_tagesschau-24.mp4",
        "26April_2010_Monday_heute-3398.mp4",
        "26April_2010_Monday_tagesschau-7272.mp4",
        "26August_2009_Wednesday_tagesschau-3225.mp4",
        "29October_2009_Thursday_tagesschau-1024.mp4",
        "30November_2009_Monday_tagesschau-5755.mp4"
    ];

    const carousel = document.getElementById('results-carousel');
    if (!carousel) return;

    videoFiles.forEach(function(file, idx) {
        var item = document.createElement('div');
        item.className = 'item item-video' + idx;
        item.innerHTML = '<video poster="" id="video' + idx + '" controls muted loop height="100%" preload="none">' +
            '<source src="static/videos/' + file + '" type="video/mp4">' +
            '</video>';
        carousel.appendChild(item);
    });
}

// Scroll-triggered section reveal animation
function setupScrollReveal() {
    var sections = document.querySelectorAll('#main-content > section');
    sections.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(function(el) {
        observer.observe(el);
    });
}

// Sticky nav active section highlighting
function setupStickyNav() {
    var nav = document.querySelector('.project-nav');
    if (!nav) return;

    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-inner a');

    window.addEventListener('scroll', function() {
        nav.classList.toggle('scrolled', window.scrollY > 50);

        var current = '';
        sections.forEach(function(section) {
            var top = section.offsetTop - 120;
            if (window.scrollY >= top) current = section.id;
        });
        navLinks.forEach(function(link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });
}

// Image lightbox
function setupLightbox() {
    document.querySelectorAll('.hero-body img, .teaser img').forEach(function(img) {
        if (img.closest('.carousel')) return; // skip carousel images
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            var overlay = document.createElement('div');
            overlay.className = 'lightbox-overlay';
            overlay.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '">';
            overlay.addEventListener('click', function() { overlay.remove(); });
            document.body.appendChild(overlay);
        });
    });
}

$(document).ready(function() {
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    // Generate video elements dynamically
    generateVideoCarousel();

    // Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
    bulmaSlider.attach();

    // Setup video autoplay for carousel
    setupVideoCarouselAutoplay();

    // Setup scroll-triggered animations
    setupScrollReveal();

    // Setup sticky navigation
    setupStickyNav();

    // Setup image lightbox
    setupLightbox();
});
