// Sticky header: add/remove .scrolled class on scroll
const header = document.querySelector('.site-header');

function onScroll() {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
