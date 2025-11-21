// Student data
const students = [
    { name: '강민석', color: 'purple' },
    { name: '권민서', color: 'orange' },
    { name: '노희지', color: 'pink' },
    { name: '류시완', color: 'purple' },
    { name: '박성수', color: 'orange' },
    { name: '박지우', color: 'pink' },
    { name: '박지혜', color: 'purple' },
    { name: '서정민', color: 'orange' },
    { name: '신기준', color: 'pink' },
    { name: '양지은', color: 'purple' },
    { name: '유성현', color: 'orange' },
    { name: '윤다경', color: 'pink' },
    { name: '윤자영', color: 'purple' },
    { name: '이정은', color: 'orange' },
    { name: '이소민', color: 'pink' },
    { name: '이시네', color: 'purple' },
    { name: '이한나', color: 'orange' },
    { name: '이혜원', color: 'pink' },
    { name: '임채영', color: 'purple' },
    { name: '장민지', color: 'orange' },
    { name: '장혜원', color: 'pink' },
    { name: '전소영', color: 'purple' },
    { name: '한서원', color: 'orange' }
];

// Get current student from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const studentIndex = parseInt(urlParams.get('student')) || 0;
const currentStudent = students[studentIndex];

// Set student name and character color
document.getElementById('student-name').textContent = currentStudent.name;
document.getElementById('page-title').textContent = currentStudent.name + ' - 포트폴리오';
document.getElementById('header-character').classList.add('color-' + currentStudent.color);

// Eye tracking
const character = document.getElementById('header-character');
const leftEye = character.querySelector('.left-eye .pupil');
const rightEye = character.querySelector('.right-eye .pupil');

document.addEventListener('mousemove', (e) => {
    const characterRect = character.getBoundingClientRect();
    const characterCenterX = characterRect.left + characterRect.width / 2;
    const characterCenterY = characterRect.top + characterRect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = mouseX - characterCenterX;
    const deltaY = mouseY - characterCenterY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 50, 5);

    const pupilX = Math.cos(angle) * distance;
    const pupilY = Math.sin(angle) * distance;

    leftEye.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    rightEye.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
});

// Sidebar navigation - smooth scroll and active state
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.project-section');

// Add hover effect to show project names
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav item on scroll
const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === '#' + id) {
                    item.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Next student navigation
document.getElementById('next-student').addEventListener('click', () => {
    const nextIndex = (studentIndex + 1) % students.length;
    window.location.href = `student.html?student=${nextIndex}`;
});

// Previous student navigation
document.getElementById('prev-student').addEventListener('click', () => {
    const prevIndex = (studentIndex - 1 + students.length) % students.length;
    window.location.href = `student.html?student=${prevIndex}`;
});

// Home button navigation
document.getElementById('home-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});
