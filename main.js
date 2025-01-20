"use strict";
// Get Elements From HTML
let nav = document.getElementById("sidenav");
let bookRoom = document.getElementById("bookRoom");
let popup = document.getElementById("popup");

// Menu For Mobile Phone 
function openNav() {
    nav.style.width = "100%";
}
function closeNav() {
    nav.style.width = "0";
}

// Book A Room
bookRoom.onclick = function () {
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}
window.onclick = function(event) {
    if (!popup.contains(event.target) && event.target !== bookRoom) {
        popup.style.display = "none";
    }
}