window.onload = function() {
  document.body.style.display = 'block';
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Set equal height for all project items
window.addEventListener('load', setEqualHeight);
window.addEventListener('resize', setEqualHeight);

function setEqualHeight() {
  // Get all '.project-grid' containers
  const grids = document.querySelectorAll('.project-grid');
  const awards = document.querySelectorAll('.club-container');

  grids.forEach(grid => {
    // Get all the '.project-item' elements within the current grid
    const items = grid.querySelectorAll('.project-item');

    // Reset the height to auto to get the natural height
    items.forEach(item => item.style.height = 'auto');

    // Calculate the maximum height among all '.project-item' elements within
    // the current grid
    const maxHeight = Array.from(items).reduce(
        (max, item) => Math.max(max, item.offsetHeight), 0);

    // Set all '.project-item' elements within the current grid to the maximum
    // height
    items.forEach(item => item.style.height = `${maxHeight}px`);
  });

  awards.forEach(award => {
    const items = award.querySelectorAll('.club-category');

    items.forEach(item => {
      item.style.height = 'auto';
    });

    const maxHeight = Array.from(items).reduce(
      (max, item) => Math.max(max, item.offsetHeight), 0);
    
    items.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  });
}

function toggleVisibility(id) {
  var element = document.getElementById(id);
  if (element.classList.contains('visible')) {
    element.classList.remove('visible');
    element.classList.add('hidden');
  } else {
    element.classList.add('visible');
    element.classList.remove('hidden');
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = modal.getElementsByClassName('modal-content')[0];
  content.style.animation = 'slideIn 0.5s forwards';

  modal.style.animation = 'fadeIn 0.5s forwards';
  modal.style.display = 'block';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = modal.getElementsByClassName('modal-content')[0];
  content.style.animation = 'slideOut 0.5s forwards';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 1000);
}

// Close modal when clicking outside of the modal content
window.onclick =
    function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let modal of modals) {
    if (event.target == modal) {
      const content = modal.getElementsByClassName('modal-content')[0];
      content.style.animation = 'slideOut 0.5s forwards';

      modal.style.animation = 'fadeOut 0.5s forwards';
      setTimeout(() => {
        modal.style.display = 'none';
      }, 1000); 
    }
  }
}

window.onload = function() {
  document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_ku9eig4', 'template_pf4t5hd', this)
        .then(
            function(response) {
              console.log('SUCCESS!', response.status, response.text);
              alert('Message sent successfully!');
            },
            function(error) {
              console.log('FAILED...', error);
              alert('Failed to send the message, please try again.');
            });
  });
}
