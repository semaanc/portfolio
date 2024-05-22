/* Make content visible + EmailJS code */
window.onload = function () {
  document.body.style.display = 'block';

  /* ----------------------------------------------------------------------------- */

  document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const responseMessage = document.getElementById('response-message');
    // Reset message visibility and previous styles
    responseMessage.classList.remove('visible');
    responseMessage.style.opacity = 0;
    responseMessage.innerHTML = '';  // Clear previous content

    emailjs.sendForm('service_ku9eig4', 'template_pf4t5hd', this)
        .then(
            function(response) {
              console.log('SUCCESS!', response.status, response.text);
              responseMessage.innerHTML =
                  '<span class=\'success-message\'>Message sent successfully!</span>';
              showResponse(true);  // True for success messages
            },
            function(error) {
              console.log('FAILED...', error);
              responseMessage.innerHTML =
                  '<span class=\'error-message\'>Failed to send message. If the issue persists contact me <a href=\'mailto:semaanceline@hotmail.com\'>here</a>!</span>';
              showResponse(false);  // False for failure messages
            });

    // Show response message
    function showResponse(isSuccess) {
      responseMessage.classList.remove('hidden');  // Make message visible
      responseMessage.classList.add('visible');  // Make message visible
      responseMessage.style.opacity = 1;  // Ensure message is fully visible

      if (isSuccess) {
        setTimeout(function() {
          responseMessage.classList.remove('visible');
          responseMessage.style.opacity = 0;
          setTimeout(function() {
            responseMessage.classList.add('hidden');
          }, 1000);
        }, 3000);
      }
    }
  });

  adjustGridItems();
};

/* ----------------------------------------------------------------------------- */

/* Smooth scrolling */
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

/* ----------------------------------------------------------------------------- */

/* Set equal height for all project items */
window.addEventListener('load', setEqualHeight);
window.addEventListener('resize', setEqualHeight);

function setEqualHeight() {
  /* For project cards */
  // Get all '.project-grid' containers
  const grids = document.querySelectorAll('.project-grid');
  const awards = document.querySelectorAll('.club-container');

  grids.forEach(grid => {
    const items = grid.querySelectorAll('.project-item');
    items.forEach(item => item.style.height = 'auto');

    const maxHeight = Array.from(items).reduce(
        (max, item) => Math.max(max, item.offsetHeight), 0);

    items.forEach(item => item.style.height = `${maxHeight}px`);
  });

  /* ----------------------------------------------------------------------------- */

  /* For award cards */
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

/* ----------------------------------------------------------------------------- */

/* Toggle visibility of coursework for Northeastern University */
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

/* ----------------------------------------------------------------------------- */

/* Modal functions */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = modal.getElementsByClassName('modal-content')[0];
  content.style.animation = 'slideIn 0.5s forwards';

  modal.style.animation = 'fadeIn 0.5s forwards';
  modal.style.display = 'block';
  document.body.classList.add('no-scroll');  // Prevent background scrolling
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = modal.getElementsByClassName('modal-content')[0];
  content.style.animation = 'slideOut 0.5s forwards';
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');  // Enable background scrolling
  }, 500);
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
        document.body.classList.remove('no-scroll');  // Enable background scrolling
      }, 500); 
    }
  }
}

// Close modal and scroll to contact section
function closeModalContactMe(modalId) {
  closeModal(modalId);
  const contactSection = document.getElementById('contact');

  setTimeout(() => {
    contactSection.scrollIntoView({
      behavior: 'smooth'
    });
  }, 500);
}

/* ----------------------------------------------------------------------------- */

function adjustGridItems() {
  const grid = document.querySelector('.project-grid');
  const items = grid.querySelectorAll('.project-item');
  const itemWidth = items[0].offsetWidth;
  const gridWidth = grid.offsetWidth;
  const itemsPerRow = Math.floor(gridWidth / itemWidth);
  const neededItems = itemsPerRow - (items.length % itemsPerRow);

  if (neededItems > 0 && neededItems < itemsPerRow) {
    for (let i = 0; i < neededItems; i++) {
      const invisibleItem = document.createElement('div');
      invisibleItem.classList.add('invisible-item');
      grid.appendChild(invisibleItem);
    }
  }
}
window.onresize = adjustGridItems();