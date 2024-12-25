// Toggle dark mode
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  // Change button icon based on theme
  if (document.body.classList.contains('dark-mode')) {
    document.getElementById('theme-toggle').textContent = '🌞'; // Switch to light mode
  } else {
    document.getElementById('theme-toggle').textContent = '🌙'; // Switch to dark mode
  }
});

// Contact form handling (you can replace with a backend API later)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You can replace the console.log with an actual email API or form handler later
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  alert('Your message has been sent!');
  document.getElementById('contact-form').reset();  // Reset the form fields
});
