// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function hideNavbar() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // cuộn xuống & đã cuộn quá 50px → ẩn navbar
        header.classList.add('hidden');
      } else {
        // cuộn lên → hiện navbar
        header.classList.remove('hidden');
      }
      lastScrollY = currentScrollY;
    });
  };

hideNavbar();