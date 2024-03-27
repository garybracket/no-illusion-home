document.addEventListener('DOMContentLoaded', function() {
  // Get the dropdown button and content
  const dropdownButton = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Hide the dropdown content by default
  dropdownContent.style.display = 'none';

  // Toggle the dropdown content when the button is clicked
  dropdownButton.addEventListener('click', function() {
      if (dropdownContent.style.display === 'none') {
          dropdownContent.style.display = 'block';
      } else {
          dropdownContent.style.display = 'none';
      }
  });
});