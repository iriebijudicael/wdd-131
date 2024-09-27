function toggleMenu() {
    const navlinks = document.getElementById('nav-links');
    navlinks.classList.toggle('show');

    const menuIcon = document.querySelector('menu-icon');
    menuIcon.classList.toggle('open');

}

// Dynamically populate the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;