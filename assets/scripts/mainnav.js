var navbar = document.getElementById("navbar");

function menutoggle() {
    if (navbar.style.display == 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
}

window.onresize = returnmenu;

function returnmenu() {
    if (window.innerWidth > 800) {
        navbar.style.display = null;
    } else {
        navbar.style.display = 'none';
    }
}
