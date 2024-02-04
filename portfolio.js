const button = document.querySelector('button');

const originalText = button.textContent;

button.addEventListener('mouseover', function() {

  button.textContent = '91: 72481-19726';
});

button.addEventListener('mouseout', function() {

  button.textContent = originalText;
});


function showAlert(event) {
  // Prevents the default form submission
  event.preventDefault();
  alert('Form submitted!');
}