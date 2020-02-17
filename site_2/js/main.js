$(document).ready(function(){
    
    let navbarActive = jQuery("#menu");
    let navbarItem = jQuery(".navbar__item")

    navbarActive.on("click", function(){
        $(navbarItem).addClass("active");
        $(this).text("главная");
    })
});