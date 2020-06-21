const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

$(document).ready(function() {
    // all custom jQuery will go here
});

function hideSubMenus() {
    $('.menu').children().hide();
    $('.submenu').children().hide();
}

$('.menu').click(function(event) {
    event.stopPropagation();
    $(this).children().slideToggle();
    // $(this).children().visibilityToggle();
});

$('.submenu').click(function(event) {
    event.stopPropagation();
    $(this).children().slideToggle();
});