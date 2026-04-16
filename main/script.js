const MOBILE_NAV_BREAKPOINT = 700;
const MODAL_ANIMATION_DURATION = 500;
const MOBILE_NAV_ANIMATION_DURATION = 420;
const CONTACT_SCROLL_DELAY = 1500;
const SCROLL_DURATION = 1000;
let mobileNavCloseTimeoutId = null;

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const navToggle = document.querySelector('.nav-toggle');
  const projectDropdown = document.querySelector('nav .dropdown');
  const projectDropdownTrigger = projectDropdown ?
      projectDropdown.querySelector('a[href="#projects"]') : null;

  setupContactForm();
  setupNavigation(nav, navToggle, projectDropdown, projectDropdownTrigger);
  setupSmoothScrolling(projectDropdownTrigger, () => {
    closeProjectDropdown(projectDropdown, projectDropdownTrigger);
    closeMobileNav(nav, navToggle);
  });
  setupSkillTooltips();
  updateLayout();
});

window.addEventListener('load', updateLayout);
window.addEventListener('resize', updateLayout);
window.addEventListener('click', handleModalOverlayClick);

function isMobileNav() {
  return window.innerWidth <= MOBILE_NAV_BREAKPOINT;
}

function updateLayout() {
  adjustGridItems();
  setEqualHeight();
}

function setupContactForm() {
  const form = document.getElementById('my-form');
  const responseMessage = document.getElementById('response-message');

  if (!form || !responseMessage) {
    return;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    resetResponseMessage(responseMessage);

    emailjs.sendForm('service_ku9eig4', 'template_pf4t5hd', this).then(
        function(response) {
          console.log('SUCCESS!', response.status, response.text);
          responseMessage.innerHTML =
              '<span class=\'success-message\'>Message sent successfully!</span>';
          showResponseMessage(responseMessage, true);

          setTimeout(() => {
            form.reset();
          }, 1000);
        },
        function(error) {
          console.log('FAILED...', error);
          responseMessage.innerHTML =
              '<span class=\'error-message\'>Failed to send message. If the issue persists contact me <a href=\'mailto:semaanceline@hotmail.com\'>here</a>!</span>';
          showResponseMessage(responseMessage, false);
        });
  });
}

function resetResponseMessage(responseMessage) {
  responseMessage.classList.remove('visible');
  responseMessage.style.opacity = 0;
  responseMessage.innerHTML = '';
}

function showResponseMessage(responseMessage, isSuccess) {
  responseMessage.classList.remove('hidden');
  responseMessage.classList.add('visible');
  responseMessage.style.opacity = 1;

  if (!isSuccess) {
    return;
  }

  setTimeout(() => {
    responseMessage.classList.remove('visible');
    responseMessage.style.opacity = 0;

    setTimeout(() => {
      responseMessage.classList.add('hidden');
    }, 1000);
  }, 3000);
}

function setupNavigation(
    nav,
    navToggle,
    projectDropdown,
    projectDropdownTrigger,
) {
  if (!nav || !navToggle || !projectDropdown || !projectDropdownTrigger) {
    return;
  }

  const projectDropdownLinks =
      projectDropdown.querySelectorAll('.dropdown-content a');

  navToggle.addEventListener('click', () => {
    if (nav.classList.contains('nav-open')) {
      closeNavigationMenus(nav, navToggle, projectDropdown, projectDropdownTrigger);
      return;
    }

    openMobileNav(nav, navToggle);
  });

  projectDropdownTrigger.addEventListener('click', event => {
    if (!isMobileNav()) {
      return;
    }

    event.preventDefault();

    if (!nav.classList.contains('nav-open')) {
      openMobileNav(nav, navToggle);
    }

    const isOpen = projectDropdown.classList.toggle('open');
    projectDropdownTrigger.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', event => {
    if (!isMobileNav() || !projectDropdown.classList.contains('open')) {
      return;
    }

    if (!projectDropdown.contains(event.target)) {
      closeProjectDropdown(projectDropdown, projectDropdownTrigger);
    }
  });

  projectDropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeProjectDropdown(projectDropdown, projectDropdownTrigger);
    });
  });

  window.addEventListener('resize', () => {
    if (isMobileNav()) {
      return;
    }

    closeNavigationMenus(nav, navToggle, projectDropdown, projectDropdownTrigger);
  });
}

function closeNavigationMenus(
    nav,
    navToggle,
    projectDropdown,
    projectDropdownTrigger,
) {
  closeProjectDropdown(projectDropdown, projectDropdownTrigger);
  closeMobileNav(nav, navToggle);
}

function closeProjectDropdown(projectDropdown, projectDropdownTrigger) {
  if (!projectDropdown || !projectDropdownTrigger) {
    return;
  }

  projectDropdown.classList.remove('open');
  projectDropdownTrigger.setAttribute('aria-expanded', 'false');
}

function closeMobileNav(nav, navToggle) {
  if (!nav || !navToggle) {
    return;
  }

  if (mobileNavCloseTimeoutId) {
    window.clearTimeout(mobileNavCloseTimeoutId);
    mobileNavCloseTimeoutId = null;
  }

  if (!nav.classList.contains('nav-open')) {
    nav.classList.remove('nav-closing');
    navToggle.setAttribute('aria-expanded', 'false');
    return;
  }

  nav.classList.remove('nav-open');
  nav.classList.add('nav-closing');
  navToggle.setAttribute('aria-expanded', 'false');

  mobileNavCloseTimeoutId = window.setTimeout(() => {
    nav.classList.remove('nav-closing');
    mobileNavCloseTimeoutId = null;
  }, MOBILE_NAV_ANIMATION_DURATION);
}

function openMobileNav(nav, navToggle) {
  if (!nav || !navToggle) {
    return;
  }

  if (mobileNavCloseTimeoutId) {
    window.clearTimeout(mobileNavCloseTimeoutId);
    mobileNavCloseTimeoutId = null;
  }

  nav.classList.remove('nav-closing');
  nav.classList.add('nav-open');
  navToggle.setAttribute('aria-expanded', 'true');
}

function setupSmoothScrolling(projectDropdownTrigger, closeNav) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      const isMobileProjectsTrigger =
          isMobileNav() && this === projectDropdownTrigger;

      if (isMobileProjectsTrigger) {
        return;
      }

      event.preventDefault();
      scrollToElementById(this.getAttribute('href').substring(1), SCROLL_DURATION);

      if (isMobileNav() && this.closest('nav') && closeNav) {
        closeNav();
      }
    });
  });
}

function setupSkillTooltips() {
  const skills = document.querySelectorAll('.skills-used img');

  if (!skills.length) {
    return;
  }

  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  skills.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
      tooltip.textContent = this.alt;
      this.classList.add('active-skill');
      tooltip.classList.add('show');
      updateTooltipPosition();
    });

    skill.addEventListener('mouseleave', function() {
      this.classList.remove('active-skill');
      tooltip.classList.remove('show');
    });

    const parentModal = skill.closest('.modal');

    if (parentModal && !parentModal.classList.contains('added-scroll-listener')) {
      parentModal.classList.add('added-scroll-listener');
      parentModal.addEventListener('scroll', updateTooltipPosition);
    }
  });
}

function customScrollTo(element, duration) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }

    const timeElapsed = currentTime - startTime;
    const nextPosition = easeInOutQuad(
        timeElapsed,
        startPosition,
        distance,
        duration,
    );

    window.scrollTo(0, nextPosition);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

function easeInOutQuad(timeElapsed, start, distance, duration) {
  let normalizedTime = timeElapsed / (duration / 2);

  if (normalizedTime < 1) {
    return distance / 2 * normalizedTime * normalizedTime + start;
  }

  normalizedTime--;
  return -distance / 2 *
      (normalizedTime * (normalizedTime - 2) - 1) + start;
}

function scrollToElementById(elementId, duration) {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error(`Element with ID '${elementId}' not found.`);
    return;
  }

  customScrollTo(element, duration);
}

function updateTooltipPosition() {
  const tooltip = document.querySelector('.show');
  const skillImg = document.querySelector('.active-skill');

  if (!tooltip || !skillImg) {
    return;
  }

  const rect = skillImg.getBoundingClientRect();
  tooltip.style.left = `${rect.left + window.scrollX + 10}px`;
  tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

  if (!isTooltipFullyVisible(tooltip)) {
    tooltip.classList.remove('show');
    skillImg.classList.remove('active-skill');
  }
}

function isTooltipFullyVisible(tooltip) {
  const rect = tooltip.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function setEqualHeight() {
  if (window.innerWidth <= MOBILE_NAV_BREAKPOINT) {
    document.querySelectorAll('.project-item, .club-category').forEach(item => {
      item.style.height = 'auto';
    });
    return;
  }

  document.querySelectorAll('.project-grid').forEach(grid => {
    const items = grid.querySelectorAll('.project-item');
    items.forEach(item => item.style.height = 'auto');

    const maxHeight = Array.from(items).reduce(
        (max, item) => Math.max(max, item.offsetHeight),
        0,
    );

    items.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  });

  document.querySelectorAll('.club-container').forEach(clubContainer => {
    const items = clubContainer.querySelectorAll('.club-category');
    items.forEach(item => item.style.height = 'auto');

    const maxHeight = Array.from(items).reduce(
        (max, item) => Math.max(max, item.offsetHeight),
        0,
    );

    items.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  });
}

function toggleVisibility(id) {
  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  element.classList.toggle('visible');
  element.classList.toggle('hidden');
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = modal?.querySelector('.modal-content');

  if (!modal || !content) {
    return;
  }

  content.style.animation = 'slideIn 0.5s forwards';
  modal.style.animation = 'fadeIn 0.5s forwards';
  modal.style.display = 'block';
  document.body.classList.add('no-scroll');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  closeModalElement(modal);
}

function closeModalElement(modal) {
  const content = modal?.querySelector('.modal-content');

  if (!modal || !content) {
    return;
  }

  content.style.animation = 'slideOut 0.5s forwards';
  modal.style.animation = 'fadeOut 0.5s forwards';

  setTimeout(() => {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }, MODAL_ANIMATION_DURATION);
}

function handleModalOverlayClick(event) {
  if (!event.target.classList.contains('modal')) {
    return;
  }

  closeModalElement(event.target);
}

function closeModalContactMe(modalId) {
  closeModal(modalId);

  setTimeout(() => {
    scrollToElementById('contact', SCROLL_DURATION);

    const project = document.getElementById(modalId);
    const projectNameElement = project?.querySelector('h2');
    const textarea = document.getElementById('message');

    if (!projectNameElement || !textarea) {
      return;
    }

    textarea.value =
        `I would like to request access to the ${projectNameElement.textContent} project.`;
  }, CONTACT_SCROLL_DELAY);
}

function adjustGridItems() {
  document.querySelectorAll('.project-grid').forEach(grid => {
    grid.querySelectorAll('.invisible-item').forEach(item => item.remove());

    if (window.innerWidth <= 900) {
      return;
    }

    const items = grid.querySelectorAll('.project-item');

    if (!items.length) {
      return;
    }

    const itemWidth = items[0].offsetWidth;
    const itemsPerRow = Math.floor(grid.offsetWidth / itemWidth);

    if (itemsPerRow <= 1) {
      return;
    }

    const remainder = items.length % itemsPerRow;
    const neededItems = remainder === 0 ? 0 : itemsPerRow - remainder;

    for (let index = 0; index < neededItems; index++) {
      const invisibleItem = document.createElement('div');
      invisibleItem.classList.add('invisible-item');
      grid.appendChild(invisibleItem);
    }
  });
}
