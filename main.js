const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// left.addEventListener("mouseenter", () => {
//   container.classList.add("hover-left");
// });

// left.addEventListener("mouseleave", () => {
//   container.classList.remove("hover-left");
// });

// right.addEventListener("mouseenter", () => {
//   container.classList.add("hover-right");
// });

// right.addEventListener("mouseleave", () => {
//   container.classList.remove("hover-right");
// });

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

var toggler = document.getElementsByClassName("menu");
var i;

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".sub-menu").classList.toggle("active");
        // this.classList.toggle("caret-down");
    });
}

// // Execute this after the site is loaded.
// $(function() {
//     // Find list items representing folders and style them accordingly.  Also, turn them
//     // into links that can expand/collapse the tree leaf.
//     $('li > ul').each(function(i) {
//         // Find this list's parent list item.
//         var parentLi = $(this).parent('li');

//         // Style the list item as folder.
//         parentLi.addClass('folder');

//         // Temporarily remove the list from the parent list item, wrap the remaining
//         // text in an anchor, then reattach it.
//         var subUl = $(this).remove();
//         parentLi.wrapInner('<a/>').find('a').click(function() {
//             // Make the anchor toggle the leaf display.
//             subUl.toggle();
//         });
//         parentLi.append(subUl);
//     });

//     // Hide all lists except the outermost.
//     $('ul ul').hide();
// });