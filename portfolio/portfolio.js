/*
adapted from: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
*/

function myMenuButton() {
    let x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function closeMenu() {
    let x = document.getElementById("navbar");
    if (x.className === "navbar responsive") {
        x.className = "navbar";
    }
}