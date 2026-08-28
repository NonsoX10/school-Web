document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-box form');
    const modal = document.getElementById('successModal');
    const closeBtn = document.getElementById('modalCloseBtn');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents instant page reload

            modalTitle.textContent = 'Welcome Back!';
            modalMessage.textContent = 'You have successfully signed in to Apex Academy.';

            modal.classList.add('active'); // Displays modal
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            window.location.reload(); // Refreshes page when clicking OK
        });
    }
});