const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme Dynamically
function switchTheme(event) {
    console.log(event.target.checked);
}

toggleSwitch.addEventListener('change', switchTheme);