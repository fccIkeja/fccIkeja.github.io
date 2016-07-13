/**
 * Main.js
 *
 * This is the primary js file used in our website.
 * All general / non-specific functionality should
 * go here.
 *
 * Copyright 2016 FreeCodeCampLagos
 * --------------------------------
 * url: http:.//freecodecamplagos.github.io
 * src: https://github.com/FreeCodeCampLagos/FreeCodeCampLagos.github.io
 * dependson: jquery
 */

$(document).ready(function(){
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    });

    // check if scroll event happened
    $(window).scroll(function() {
        // check if user scrolled more than 550 from top of the browser window
        if ($(document).scrollTop() > 550) {
            // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
            $(".navbar-fixed-top").css("background-color", "black");
        } else {
            $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });
});
