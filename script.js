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

// Set equal height for all project items
window.addEventListener('load', setEqualHeight);
window.addEventListener('resize', setEqualHeight);

function setEqualHeight() {
  // Get all '.project-grid' containers
  const grids = document.querySelectorAll('.project-grid');

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
