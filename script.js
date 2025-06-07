document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting normally

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  // Simple validation
  if (name === '' || email === '' || message === '') {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill out all fields.';
    return;
  }

  if (!validateEmail(email)) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent = 'Thank you for contacting me! I will get back to you soon.';

  // Reset form
  this.reset();
});

function validateEmail(email) {
  // Simple email validation regex
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
