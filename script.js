//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const codeInputs = document.querySelectorAll('.code');

  // Function to move focus to the next input
  function moveFocusToNext(currentInput) {
    let nextInput = currentInput.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  }

  // Function to move focus to the previous input
  function moveFocusToPrevious(currentInput) {
    let previousInput = currentInput.previousElementSibling;
    if (previousInput) {
      previousInput.focus();
    }
  }

  // Event listener for handling keyup events on input fields
  codeInputs.forEach(input => {
    input.addEventListener('keyup', (event) => {
      if (event.key === 'Backspace') {
        if (input.value === '') {
          // Move focus to the previous input if current input is empty
          moveFocusToPrevious(input);
        }
      } else if (event.key >= '0' && event.key <= '9') {
        if (input.value !== '') {
          // Move focus to the next input field after a digit is typed
          moveFocusToNext(input);
        }
      }
    });

    // Automatically focus the next input when the user types in the current one
    input.addEventListener('input', () => {
      if (input.value !== '') {
        moveFocusToNext(input);
      }
    });
  });
});
