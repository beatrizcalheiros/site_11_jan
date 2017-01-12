function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



/*masonry*/
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
