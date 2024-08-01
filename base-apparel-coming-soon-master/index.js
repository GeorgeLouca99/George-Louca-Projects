function validateEmail() {
  const emailInput = document.getElementById('emailInput');
  const emailErrorMessage = document.getElementById('emailErrorMessage');
  const errorIcon = document.querySelector('.error-icon');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const email = emailInput.value;

  if (emailRegex.test(email)) {
    emailInput.style.borderColor = '';
    emailErrorMessage.textContent = '';
    errorIcon.style.display = 'none';
    window.location.href = 'thankyou-page.html';
  } else {
    emailInput.style.borderColor = 'red';
    emailErrorMessage.textContent = 'Please enter a valid email address';
    errorIcon.style.display = 'inline';
  }
}

