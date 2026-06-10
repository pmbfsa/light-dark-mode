import './sass/style.scss';

const toggleThemeSwitch = document.querySelector('input[type="checkbox"]');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Get images for Light or Dark Mode
function changeImageMode(mode) {
  image1.src = `./svgs/undraw_web_developer_${mode}.svg`;
  image2.src = `./svgs/undraw_click_interaction_${mode}.svg`;
  image3.src = `./svgs/undraw_conference_call_${mode}.svg`;
}

// Change elements styles to Dark Mode
function darkMode() {
  title.textContent = 'Welcome to the dark side!';
  subtitle.textContent = 'Enjoy yourself in the realm of shadow';
  nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  textBox.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  changeImageMode('dark');
}

// Change elements styles to Light Mode
function lightMode() {
  title.textContent = 'Welcome to the light side!';
  subtitle.textContent = 'Enjoy yourself in the realm of brightness';
  nav.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  textBox.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  changeImageMode('light');
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    lightMode();
  }
}

// Event listeners
toggleThemeSwitch.addEventListener('change', switchTheme);

const theme = localStorage.getItem('theme');

if (theme) {
  document.documentElement.setAttribute('data-theme', theme);

  if (theme === 'dark') {
    toggleThemeSwitch.checked = true;
    darkMode();
  }
}
