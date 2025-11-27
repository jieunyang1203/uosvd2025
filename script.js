// Color palette for hover effects
const hoverColors = [
    { class: 'color-purple', color: '#FF4BFD' },
    { class: 'color-pink', color: '#4898FB' },
    { class: 'color-orange', color: '#FEB64B' }
];

// Mouse position tracking for pupil movement
let mouseX = 0;
let mouseY = 0;

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updatePupilPositions();
});

// Character hover effects with color change and tilt
const characters = document.querySelectorAll('.character');

characters.forEach((character, index) => {
    // Randomly assign a hover color to each character
    const randomColor = hoverColors[Math.floor(Math.random() * hoverColors.length)];

    character.addEventListener('mouseenter', function() {
        // Change to random color
        this.classList.add(randomColor.class);
    });

    character.addEventListener('mouseleave', function() {
        // Reset to default color
        this.classList.remove('color-purple', 'color-pink', 'color-orange');
    });

    // Click to navigate to student page
    character.addEventListener('click', function() {
        window.location.href = `student.html?student=${index}`;
    });
});

// Pupil movement following cursor
function updatePupilPositions() {
    const pupils = document.querySelectorAll('.pupil');

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
        pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    });
}

// Initialize pupil positions on load
window.addEventListener('load', () => {
    // Set initial mouse position to center of screen
    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;
    updatePupilPositions();
});

// Update pupil positions on window resize
window.addEventListener('resize', () => {
    updatePupilPositions();
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
