$(document).ready(function(){
    
    let navbarActive = jQuery("#menu");
    let navbarItem = jQuery(".navbar__item")

    navbarActive.on("click", function(){
        $(navbarItem).addClass("active");
        $(this).text("главная");
    });
    var w = $(window).width(); 
    if (w < 520) { 
        $("#icon-1").attr("src", "img/icons/mastercard-sm.png");
        $("#icon-2").attr("src", "img/icons/logo-sm.png");
        $("#icon-3").attr("src", "img/icons/visa-sm.png"); 
    }
});