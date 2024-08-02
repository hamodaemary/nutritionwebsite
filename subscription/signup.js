document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous error messages
        usernameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        usernameInput.classList.remove('error');
        emailInput.classList.remove('error');
        passwordInput.classList.remove('error');

        // Validate username
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            usernameInput.classList.add('error');
            isValid = false;
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailInput.classList.add('error');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailError.textContent = 'Email is invalid';
            emailInput.classList.add('error');
            isValid = false;
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            passwordInput.classList.add('error');
            isValid = false;
        }

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
        else{
            const newPageUrl = '../index.html'; // replace with the URL of your new HTML file
            window.open(newPageUrl, '_blank');
        }
    });
});