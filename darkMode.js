const darkMode = document.querySelector(".button__toggle");

// in milliseconds
const animationDuration = 600;
const animationChange = animationDuration / 2;

const moonSVG = `<svg aria-hidden="true" style="margin-bottom: 3px;" focusable="false" data-prefix="fad" data-icon="moon-stars" class="svg-inline--fa fa-moon-stars fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"> <g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z" ></path></g></svg>`;
const sunSVG = `<svg aria-hidden="true" style="margin-right: 3px;" focusable="false" data-prefix="fad" data-icon="sun" class="svg-inline--fa fa-sun fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"></path></g></svg>`;

// false = light mode, true = dark mode
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

let currentTheme = localStorage.getItem("theme");

// this timeout of 0 seconds, ensures that the first page load, wont have the transition of 3 seconds.
setTimeout(() => {
  document.body.classList.add("transition");
}, 300);

if (!currentTheme) {
  if (prefersDarkMode.matches) {
    currentTheme = "dark";
  } else if (!prefersDarkMode.matches) {
    currentTheme = "light";
  }
}

if (currentTheme == "dark") {
  document.documentElement.classList.add("dark-mode");
  darkMode.innerHTML = moonSVG;
} else if (currentTheme == "light") {
  document.documentElement.classList.remove("dark-mode");
  darkMode.innerHTML = sunSVG;
}

darkMode.addEventListener("click", toggleMode);

function toggleMode() {
  darkMode.disabled = true;
  var theme = document.documentElement.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    setTimeout(() => {
      document.documentElement.classList.toggle("dark-mode");
      darkMode.innerHTML = moonSVG;
    }, animationChange);
    addSwitch();
  } else {
    setTimeout(() => {
      document.documentElement.classList.toggle("dark-mode");
      darkMode.innerHTML = sunSVG;
    }, animationChange);
    addSwitch();
  }
}

function addSwitch() {
  darkMode.classList.add("switch");
  removeSwitch();
}

function removeSwitch() {
  setTimeout(function () {
    darkMode.classList.remove("switch");
    darkMode.disabled = false;
  }, animationDuration);
}
