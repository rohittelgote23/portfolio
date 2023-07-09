const root = document.querySelector('html');
const body = document.querySelector('body');
const mainNav = document.querySelector("nav");
const menu = document.querySelector('.nav-links');
const menuButton = document.getElementById('menu-display');
const themeDisplay = document.getElementById('theme-display');

mainNav.classList.add('js-nav');

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  root.className = theme;
  const shade = getComputedStyle(document.documentElement).getPropertyValue('--shade-100');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', shade);
}

const setTheme = (className) => {
  var root = document.getElementsByTagName('html')[0];
  root.className = className;
  localStorage.setItem('theme', className);
  const shade = getComputedStyle(document.documentElement).getPropertyValue('--shade-100');
  document.querySelector('meta[name="theme-color"]').setAttribute('content', shade);
}

const showMenu = () => {
  menu.classList.add('visible');
  menuButton.classList.add('active');
}

const hideMenu = () => {
  menu.classList.remove('visible');
  menuButton.classList.remove('active');
}

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let scrolledPosition = window.scrollY;
  let isScrollDown;

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  previousScrollPosition = scrolledPosition;
  return isScrollDown;
}

const handleNavScroll = () => {
  if (mainNav.classList.contains('visible')) {
    if (isScrollingDown()) {
      mainNav.classList.add('scroll-down');
      mainNav.classList.remove('scroll-up')
    } else {
      mainNav.classList.add('scroll-up');
      mainNav.classList.remove('scroll-down')
    }
  } else {
    mainNav.classList.remove('scroll-up');
    mainNav.classList.remove('scroll-down')
  }
}

getTheme();


menuButton.addEventListener("click", function () {
  if (menu.classList.contains('visible')) {
    hideMenu();
  } else {
    showMenu();
  }
})

menu.addEventListener("click", function () {
  hideMenu()
})

window.addEventListener('scroll', () => {
  handleNavScroll()
})

themeDisplay.addEventListener("change", () => {
  if (themeDisplay.checked) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

