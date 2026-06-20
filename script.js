// Random hover colors (the four menu palette colors)
const hoverColors = ['color-pink', 'color-orange', 'color-sky', 'color-green'];
const mobileLandingQuery = window.matchMedia('(max-width: 768px)');

function optimizedImageSrc(src) {
    return /^(self|map|shape|collected|generative)\/.+\.(png|jpe?g)$/i.test(src)
        ? `optimized/${src}`
        : src;
}

// Representative Show All image per student (shown in the left panel on hover)
const studentImages = {
    '강민석': 'self/강민석self.png',
    '권민서': 'self/권민서self.png',
    '노희지': 'self/노희지self.png',
    '류시완': 'self/류시완self.jpg',
    '박성수': 'self/박성수self.png',
    '박지우': 'self/박지우self.png',
    '박지혜': 'self/박지혜self.png',
    '서정민': 'self/서정민self.png',
    '신기준': 'self/신기준self.png',
    '양지은': 'self/양지은self.png',
    '유성헌': 'self/유성헌self.png',
    '윤다경': 'students/윤다경/Gen_사진1_윤다경.jpg',
    '윤자영': 'self/윤자영self.png',
    '이정은': 'students/이정은/Map_1_이정은.jpg',
    '이소민': 'self/이소민self.png',
    '이시네': 'self/이시네self.png',
    '이한나': 'self/이한나self.png',
    '이혜원': 'self/이혜원self.png',
    '임채영': 'self/임채영self.png',
    '장민지': 'self/장민지self.png',
    '장혜원': 'self/장혜원self.png',
    '전소영': 'students/전소영/Collectedbook_1_전소영.jpg',
    '최문형': 'self/최문형self.png',
    '한서원': 'self/한서원self.png'
};

const previewEl = document.getElementById('student-preview');

// Mouse position tracking for pupil movement
let mouseX = 0;
let mouseY = 0;

// Track mouse movement
if (!mobileLandingQuery.matches) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        updatePupilPositions();
    });
}

// Character hover effects with color change and tilt
const characters = document.querySelectorAll('.character');

if (!mobileLandingQuery.matches) {
    characters.forEach((character, index) => {
        // On hover: assign a random palette color (eyes hide & name shows via CSS)
        // and show that student's representative image in the left panel.
        character.addEventListener('mouseenter', function() {
            const c = hoverColors[Math.floor(Math.random() * hoverColors.length)];
            this.classList.remove('color-pink', 'color-orange', 'color-sky', 'color-green');
            this.classList.add(c);

            const nameEl = this.querySelector('.face-name');
            const name = nameEl ? nameEl.textContent.trim() : '';
            const src = studentImages[name];
            if (previewEl && src) {
                previewEl.src = encodeURI(optimizedImageSrc(src));
                previewEl.style.display = 'block';
            }
        });
        character.addEventListener('mouseleave', function() {
            this.classList.remove('color-pink', 'color-orange', 'color-sky', 'color-green');
            if (previewEl) {
                previewEl.style.display = 'none';
                previewEl.removeAttribute('src');
            }
        });

        // Click to navigate to student page
        character.addEventListener('click', function() {
            window.location.href = `student.html?student=${index}`;
        });
    });
}

// Pupil movement following cursor (+ subtle random contract/expand on move)
let lastPupilScaleUpdate = 0;
function updatePupilPositions() {
    const pupils = document.querySelectorAll('.pupil');

    // Re-roll a new random size at most every 120ms while the mouse moves;
    // the CSS transition on .pupil smooths the change.
    const now = performance.now();
    const reroll = now - lastPupilScaleUpdate > 120;
    if (reroll) lastPupilScaleUpdate = now;

    pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate angle between eye center and mouse
        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);

        // Calculate distance (capped to keep pupil inside eye)
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 5; // Maximum pixels pupil can move from center

        // Calculate new position
        const pupilX = Math.cos(angle) * Math.min(distance / 30, maxDistance);
        const pupilY = Math.sin(angle) * Math.min(distance / 30, maxDistance);

        // Apply transform - pupils follow cursor
        pupil.style.transform =
            `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;

        // Very subtle random rounding that comes and goes as the mouse moves
        if (reroll) {
            pupil.style.borderRadius = Math.random() < 0.5
                ? '0px'
                : (1 + Math.random() * 2).toFixed(1) + 'px'; // ~1–3px
        }
    });
}

// Initialize pupil positions on load
if (!mobileLandingQuery.matches) {
    window.addEventListener('load', () => {
        // Set initial mouse position to center of screen
        mouseX = window.innerWidth / 2;
        mouseY = window.innerHeight / 2;
        updatePupilPositions();
    });
}

function setResponsiveScale() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        document.documentElement.style.setProperty('--s', 1);
        document.documentElement.style.setProperty('--pile-s', 0.85);
        return;
    }

    const w = window.innerWidth;
    const h = window.innerHeight;
    const s = Math.min(1, Math.max(0.5, w / 1500));
    const rightPanelWidth = w * 0.735;
    const pileFitByWidth = rightPanelWidth / 1350;
    const pileFitByHeight = (h * 0.78) / 626;
    const pileS = Math.min(0.85 * s, pileFitByWidth, pileFitByHeight);

    document.documentElement.style.setProperty('--s', s);
    document.documentElement.style.setProperty('--pile-s', Math.max(0.36, pileS));
}

setResponsiveScale();
window.addEventListener('resize', () => {
    setResponsiveScale();
    if (!mobileLandingQuery.matches) updatePupilPositions();
});

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Project card navigation
const projectLinks = {
    'card-1': 'show-all.html', // Show All
    'card-2-group': 'mapping-your-time.html',
    'card-3-group': 'collected-book.html',
    'card-5': 'shape-poster.html',
    'card-6-group': 'generative-system.html',
    'card-8-group': 'self-identity.html'
};

// Add click events to all card groups and cards
Object.keys(projectLinks).forEach(cardId => {
    const element = document.querySelector(`.${cardId}`);
    if (element) {
        element.addEventListener('click', () => {
            window.location.href = projectLinks[cardId];
        });
    }
});

// Glitch effect for text
if (!mobileLandingQuery.matches) {
    const glitchTexts = document.querySelectorAll('.glitch-text');
    const glitchChars = '#$%^&*!@~+-=<>?/|\\';

    glitchTexts.forEach(glitchText => {
        const originalText = glitchText.textContent;

        function glitchEffect() {
            let iterations = 0;
            const maxIterations = 8;

            const interval = setInterval(() => {
                glitchText.textContent = originalText
                    .split('')
                    .map((char, index) => {
                        if (char === ' ') return ' ';
                        if (iterations < maxIterations && Math.random() < 0.4) {
                            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                        }
                        return originalText[index];
                    })
                    .join('');

                iterations++;

                if (iterations >= maxIterations) {
                    clearInterval(interval);
                    glitchText.textContent = originalText;
                }
            }, 60);
        }

        // Run glitch effect continuously every 1.5-2.5 seconds
        setInterval(() => {
            glitchEffect();
        }, Math.random() * 1000 + 1500);
    });
}

(function renderMobileGallery() {
    const mobileQuery = mobileLandingQuery;
    if (!mobileQuery.matches) {
        const renderAfterResize = (event) => {
            if (event.matches) window.location.reload();
        };
        if (mobileQuery.addEventListener) {
            mobileQuery.addEventListener('change', renderAfterResize);
        } else if (mobileQuery.addListener) {
            mobileQuery.addListener(renderAfterResize);
        }
        return;
    }

    function ensureMobileGallery() {
        let mobileGallery = document.getElementById('mobile-gallery');
        if (mobileGallery) return mobileGallery;

        const mobileView = document.createElement('main');
        mobileView.className = 'mobile-view';
        mobileView.setAttribute('aria-label', 'Mobile gallery');

        const mobileLogo = document.createElement('div');
        mobileLogo.className = 'mobile-logo';
        mobileLogo.setAttribute('role', 'img');
        mobileLogo.setAttribute('aria-label', 'UOSVD Visual Design 1&2');

        mobileGallery = document.createElement('div');
        mobileGallery.className = 'mobile-students-container';
        mobileGallery.id = 'mobile-gallery';

        mobileView.appendChild(mobileLogo);
        mobileView.appendChild(mobileGallery);

        const stage = document.querySelector('.stage');
        document.body.insertBefore(mobileView, stage);
        return mobileGallery;
    }

    const mobileGallery = ensureMobileGallery();

    const mobileNameMapping = {
        '박성수': 'Sungsu Park',
        '이한나': 'Hanna Lee',
        '류시완': 'Siwan Ryu',
        '권민서': 'Minseo Kwon',
        '박지혜': 'Jihye Park',
        '신기준': 'Kijoone Shin',
        '최문형': 'Moonhyung Choi',
        '한서원': 'Seowon Han',
        '이소민': 'Somin Lee',
        '박지우': 'Jiwoo Park',
        '장혜원': 'Hyewon Jang',
        '이혜원': 'Hyewon Lee',
        '서정민': 'Jungmin Seo',
        '장민지': 'Minji Jang',
        '강민석': 'Minseok Kang',
        '유성헌': 'Sungheon Yu',
        '양지은': 'Jieun Yang',
        '윤자영': 'Jayoung Yoon',
        '노희지': 'Huiji Noh',
        '이시네': 'Shine Lee',
        '임채영': 'Chaeyoung Lim',
        '전소영': 'Soyoung Jeon'
    };

    const mobileImages = [
        'collected/박성수book.png',
        'collected/이한나book.png',
        'collected/류시완book.mp4',
        'collected/권민서book.png',
        'collected/박지혜book.png',
        'collected/신기준book.png',
        'collected/최문형book.png',
        'collected/한서원book.png',
        'collected/이소민book.png',
        'collected/박지우book.png',
        'collected/장혜원book.png',
        'collected/이혜원book.png',
        'collected/서정민book.png',
        'shape/권민서shape.png',
        'shape/박성수shape.png',
        'shape/박지혜shape.png',
        'shape/박지우shape.jpg',
        'shape/신기준shape.png',
        'shape/이소민shape.png',
        'shape/이한나shape.png',
        'shape/장민지shape.png',
        'shape/장혜원shape.png',
        'shape/최문형shape.png',
        'shape/한서원shape.png',
        'shape/서정민shape.png',
        'shape/이혜원shape.png',
        'shape/류시완shape.mp4',
        'shape/이시네shape.png',
        'generative/신기준gen.png',
        'generative/이한나gen.png',
        'generative/한서원gen.png',
        'generative/장혜원gen.png',
        'generative/박지우gen.png',
        'generative/이혜원gen.png',
        'generative/권민서gen.png',
        'generative/최문형gen.png',
        'generative/박지혜gen.png',
        'generative/이소민gen.png',
        'generative/류시완gen.png',
        'generative/박성수gen.png',
        'generative/장민지gen.png',
        'generative/서정민gen.png',
        'self/신기준self.png',
        'self/이소민self.png',
        'self/강민석self.png',
        'self/이한나self.png',
        'self/박지혜self.png',
        'self/한서원self.png',
        'self/유성헌self.png',
        'self/양지은self.png',
        'self/이혜원self.png',
        'self/최문형self.png',
        'self/류시완self.jpg',
        'self/윤자영self.png',
        'self/권민서self.png',
        'self/노희지self.png',
        'self/서정민self.png',
        'self/박성수self.png',
        'self/장민지self.png',
        'self/이시네self.png',
        'self/임채영self.png',
        'self/장혜원self.png',
        'self/박지우self.png',
        'map/신기준map.png',
        'map/장혜원map.png',
        'map/이혜원map.png',
        'map/박지우map.jpg',
        'map/박지혜map.png',
        'map/최문형map.png',
        'map/류시완map.jpg',
        'map/권민서map.png',
        'map/이소민map.png',
        'map/이한나map.png',
        'map/박성수map.png',
        'map/서정민map.png',
        'map/한서원map.png'
    ];

    function extractMobileKoreanName(path) {
        const filename = path.split('/')[1];
        const koreanName = filename.match(/^[\uAC00-\uD7A3]+/);
        return koreanName ? koreanName[0] : '';
    }

    function shuffleMobileImages(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function playVideoWhenVisible(video) {
        let isVisible = false;
        const play = () => {
            if (isVisible) video.play().catch(() => {});
        };
        video.addEventListener('loadeddata', play);
        video.addEventListener('canplay', play);
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    isVisible = entry.isIntersecting;
                    if (isVisible) play();
                    else video.pause();
                });
            }, { threshold: 0.1 });
            observer.observe(video);
        } else {
            isVisible = true;
            play();
        }
    }

    let activeMobileItem = null;

    function setActiveMobileItem(nextItem) {
        if (activeMobileItem && activeMobileItem !== nextItem) {
            activeMobileItem.classList.remove('active');
        }
        activeMobileItem = nextItem;
        if (activeMobileItem) activeMobileItem.classList.add('active');
    }

    function createMobileItem(imgPath, index) {
        const item = document.createElement('div');
        item.className = 'mobile-student-item';

        const media = document.createElement(imgPath.endsWith('.mp4') ? 'video' : 'img');
        media.src = optimizedImageSrc(imgPath);
        if (media.tagName === 'VIDEO') {
            media.autoplay = true;
            media.muted = true;
            media.loop = true;
            media.playsInline = true;
            media.setAttribute('playsinline', '');
            media.setAttribute('webkit-playsinline', '');
            media.preload = 'metadata';
            media.setAttribute('aria-label', `Image ${index + 1}`);
        } else {
            media.alt = `Image ${index + 1}`;
            media.loading = 'lazy';
            media.decoding = 'async';
            if ('fetchPriority' in media) {
                media.fetchPriority = index < 6 ? 'high' : 'low';
            }
        }

        const koreanName = extractMobileKoreanName(imgPath);
        const englishName = mobileNameMapping[koreanName] || koreanName;

        const name = document.createElement('span');
        name.className = 'mobile-student-name';
        name.textContent = englishName;

        item.addEventListener('pointerenter', () => {
            setActiveMobileItem(item);
        });

        item.addEventListener('pointerleave', () => {
            if (activeMobileItem === item) setActiveMobileItem(null);
        });

        item.addEventListener('click', (event) => {
            event.stopPropagation();
            const shouldActivate = activeMobileItem !== item;
            setActiveMobileItem(shouldActivate ? item : null);
        });

        item.appendChild(media);
        item.appendChild(name);
        if (media.tagName === 'VIDEO') playVideoWhenVisible(media);
        return item;
    }

    const shuffledMobileImages = shuffleMobileImages(mobileImages);
    let nextMobileImageIndex = 0;

    function scheduleMobileBatch(callback) {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(callback, { timeout: 180 });
        } else {
            window.setTimeout(callback, 45);
        }
    }

    function appendMobileBatch(batchSize) {
        const fragment = document.createDocumentFragment();
        const end = Math.min(nextMobileImageIndex + batchSize, shuffledMobileImages.length);

        for (; nextMobileImageIndex < end; nextMobileImageIndex++) {
            fragment.appendChild(createMobileItem(
                shuffledMobileImages[nextMobileImageIndex],
                nextMobileImageIndex
            ));
        }

        mobileGallery.appendChild(fragment);

        if (nextMobileImageIndex < shuffledMobileImages.length) {
            scheduleMobileBatch(() => appendMobileBatch(8));
        }
    }

    appendMobileBatch(12);

    document.addEventListener('click', (event) => {
        if (event.target.closest('.mobile-student-item')) return;
        setActiveMobileItem(null);
    });
})();
