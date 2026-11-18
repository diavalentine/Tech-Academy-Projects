

//light-mode toggle
const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
    root.dataset.theme = theme;
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch {}
setTheme(savedTheme || 'dark');

themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('theme', next); } catch {}
});

//contact form code to prevent leaving page when submit button is clicked
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevents leaving page

    //sending the form info by way of HTTP Request
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
    });

    form.reset();
    document.getElementById('form-status').textContent = 'Thanks for your message!'; //thank you message for content sent
});

//secret button code
const secretButton = document.getElementById('secret-button');
const secret = document.getElementById('secret');

//when button is clicked, roll a d20
secretButton.addEventListener('click', function () {
    const roll = Math.floor(Math.random() * 20) + 1;
    document.getElementById('secret-roll').textContent = roll;
    secret.classList.add('show');
    if (roll == 20) {
        document.getElementById("hidden-msg").innerHTML = "Nice!";
    } else if (roll == 1) {
        document.getElementById("hidden-msg").innerHTML = "Yikes...";
    }
});


//hides secret again when clicked away
secret.addEventListener('click', function () {
    secret.classList.remove('show');
});