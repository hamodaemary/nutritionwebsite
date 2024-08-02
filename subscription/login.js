document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous error messages
        usernameError.textContent = '';
        passwordError.textContent = '';

        // Validate username
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            isValid = false;
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
document.getElementById('btn').addEventListener('click', function() {
    const newPageUrl = '../index.html'; // replace with the URL of your new HTML file
    window.open(newPageUrl, '_blank');
})