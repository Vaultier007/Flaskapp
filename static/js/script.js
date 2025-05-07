document.addEventListener('DOMContentLoaded', function() {
    // Display current date
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const now = new Date();
        dateElement.textContent = now.toLocaleDateString();
    }
});
