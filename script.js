document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const buttons = document.querySelectorAll('.view-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      alert(
          'Here would be a modal or detailed view for ' +
          this.previousElementSibling.textContent);
    });
  });
});
