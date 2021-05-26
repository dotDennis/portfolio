const darkMode = document.querySelector(".btn-toggle");

// false = light mode, true = dark mode
let mode = false;

// in milliseconds
const animationDuration = 600;
const animationChange = animationDuration/2;

darkMode.addEventListener("click", function () {
    if (!mode) {
        darkMode.classList.add("switch")
        setTimeout(function() {
        darkMode.firstElementChild.setAttribute("data-icon", "moon-stars")
    document.documentElement.classList.toggle("dark-mode")

        }, animationChange)
        mode = true;
        removeSwitch()
    }
    else{
        darkMode.classList.add("switch")
        setTimeout(function () {
        document.documentElement.classList.toggle("dark-mode")
        darkMode.firstElementChild.setAttribute("data-icon", "sun")
        }, animationChange)
        mode = false;
        removeSwitch()
    }
});


function removeSwitch() {
    setTimeout(function (){
        darkMode.classList.remove("switch")
    }, animationDuration)
}
