import './sass/style.scss';

// Constants
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

// DOM Elements
const toggleThemeSwitch = document.querySelector('input[type="checkbox"]');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Get images for Light or Dark Theme
function changeImageTheme(mode) {
  image1.src = `./svgs/undraw_web_developer_${mode}.svg`;
  image2.src = `./svgs/undraw_click_interaction_${mode}.svg`;
  image3.src = `./svgs/undraw_conference_call_${mode}.svg`;
}

// Toggle elements properties to match Light and Dark Theme
function toggleLightDarkTheme(theme) {
  title.textContent =
    theme === LIGHT_THEME
      ? 'Welcome to the light side!'
      : 'Welcome to the dark side!';

  subtitle.textContent =
    theme === LIGHT_THEME
      ? 'Enjoy yourself in the realm of brightness'
      : 'Enjoy yourself in the realm of shadow';

  nav.style.backgroundColor =
    theme === LIGHT_THEME ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';

  textBox.style.backgroundColor =
    theme === LIGHT_THEME ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)';

  toggleIcon.children[0].textContent =
    theme === LIGHT_THEME ? 'Light Mode' : 'Dark Mode';

  theme === LIGHT_THEME
    ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

  changeImageTheme(theme);
}

// Theme Switch Change Event
function onChangeThemeSwitch(event) {
  document.documentElement.setAttribute(
    'data-theme',
    event.target.checked ? DARK_THEME : LIGHT_THEME,
  );

  localStorage.setItem(
    'theme',
    event.target.checked ? DARK_THEME : LIGHT_THEME,
  );

  toggleLightDarkTheme(event.target.checked ? DARK_THEME : LIGHT_THEME);
}

// Event listeners
toggleThemeSwitch.addEventListener('change', onChangeThemeSwitch);

// On load
const theme = localStorage.getItem('theme');

if (theme) {
  document.documentElement.setAttribute('data-theme', theme);
  toggleThemeSwitch.checked = theme === DARK_THEME;
  toggleLightDarkTheme(theme);
}
