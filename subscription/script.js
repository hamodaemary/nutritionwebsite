// script.js
document.addEventListener('DOMContentLoaded', () => {
    const subscribeButtons = document.querySelectorAll('.subscribe-button');
    const confirmationMessage = document.getElementById('confirmationMessage');

    subscribeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const planCard = button.closest('.plan-card');
            const selectedPlan = planCard.getAttribute('data-plan');
            
            // Display the confirmation message
            confirmationMessage.textContent = `Thank you for subscribing to the ${capitalizeFirstLetter(selectedPlan)} Plan!`;
            confirmationMessage.classList.remove('hidden');
        });
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
