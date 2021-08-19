window.addEventListener('DOMContentLoaded', event => {
    const themeButton = document.getElementById('button-theme-toggle');
    console.log(themeButton);
    
    themeButton.addEventListener('click', event => {
        toggleTheme();
    });
});


function toggleTheme() {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
}