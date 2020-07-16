function navButton() {
    var x = document.getElementById("nav-list");
    if (x.className === "nav-list") {
        x.className += " responsive";
    } else {
        x.className = "nav-list";
    }
}
