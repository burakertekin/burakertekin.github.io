const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

$(document).ready(function() {
    // all custom jQuery will go here
});

// hide sub menus on load
function hideSubMenus() {
    $('.menu').children().hide();
    $('.submenu').children().hide();
}

// expand menu items
$('.menu').click(function(event) {
    event.stopPropagation();
    $(this).children().slideToggle();
});

// expand submenu items
$('.submenu').click(function(event) {
    event.stopPropagation();
    $(this).children().slideToggle();
});