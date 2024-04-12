document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name === '') {
        alert('Please enter your name');
        return;
      }
  
      if (email === '') {
        alert('Please enter your email address');
        return;
      }
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
      }
  
      if (message === '') {
        alert('Please enter your message');
        return;
      }
  
      // If all validations pass, you can submit the form
      // Here you can add code to submit the form data to your backend or handle it as needed
      alert('Form submitted successfully!');
      form.reset();
    });
  
    // Function to validate email address format
    function isValidEmail(email) {
      // Regular expression for basic email validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  