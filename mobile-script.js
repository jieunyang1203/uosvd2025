// Handle student item clicks
const studentItems = document.querySelectorAll('.student-item');

studentItems.forEach(item => {
    item.addEventListener('click', function() {
        // Toggle active class
        this.classList.toggle('active');

        // Remove active class from other items
        studentItems.forEach(otherItem => {
            if (otherItem !== this) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Close name display when clicking elsewhere
document.addEventListener('click', function(e) {
    if (!e.target.closest('.student-item')) {
        studentItems.forEach(item => {
            item.classList.remove('active');
        });
    }
});
