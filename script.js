// Select all the OTP input fields
const inputs = document.querySelectorAll('.code');

// Add event listeners for each input field
inputs.forEach((input, index) => {
    // Event listener for input event
    input.addEventListener('input', () => {
        if (input.value) {
            // Move focus to the next input field if not the last one
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    // Event listener for keydown event
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && index > 0) {
            // Move focus to the previous input field if backspace is pressed and the current field is empty
            inputs[index - 1].focus();
        }
    });
});
