$(document).ready(function(){
    
    var navbarActive = jQuery(".navbar__btn");
    var navbarItem = jQuery(".navbar__item")

    navbarActive.on("click", function(){
        $(navbarItem).addClass("active");
        $(this).text("главная");
    })
});