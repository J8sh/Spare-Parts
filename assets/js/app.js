function navBar() {
    var toggleBar = document.getElementById("navBar");
    if (toggleBar.className === "topnav") {
        toggleBar.className += " responsive";
    } else {
        toggleBar.className = "topnav";
    }
}