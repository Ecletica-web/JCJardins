
/* Menu Dropdown */


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    menuToggle.addEventListener("click", () => {
        dropdownMenu.style.display = 
            dropdownMenu.style.display === "block" ? "none" : "block";
    });
});