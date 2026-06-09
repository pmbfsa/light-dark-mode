import './sass/style.scss';

const toggleThemeSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Get images for Light or Dark Mode
function changeImageMode(mode) {
  image1.src = `/src/assets/svgs/undraw_proud_coder_${mode}.svg`;
  image2.src = `/src/assets/svgs/undraw_feeling_proud_${mode}.svg`;
  image3.src = `/src/assets/svgs/undraw_conceptual_idea_${mode}.svg`;
}

// Change elements styles to Dark Mode
function darkMode() {
  nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  textBox.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  changeImageMode('dark');
}

// Change elements styles to Light Mode
function lightMode() {
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
