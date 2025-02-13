// Select all the OTP input fields
const inputs = document.querySelectorAll('.code');

// Add event listeners for input fields
inputs.forEach((input, index) => {
    // When the user types something
    input.addEventListener('input', () => {
        if (input.value) {
            // Focus the next input field
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    // When the user presses backspace
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && index > 0) {
            // Focus the previous input field if backspace is pressed and the current field is empty
            inputs[index - 1].focus();
        }
    });
});
