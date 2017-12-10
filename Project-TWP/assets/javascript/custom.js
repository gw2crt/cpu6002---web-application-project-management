$(document).ready(function(){
    $(".nav-button a").click(function(){
        $(".nav-overlay").fadeToggle(200);
        $(this).toggleClass('nav-btn-open').toggleClass('nav-btn-close');
    });
});
$('.nav-overlay').on('click', function(){
    $(".nav-overlay").fadeToggle(200);
    $(".nav-button a").toggleClass('nav-btn-open').toggleClass('nav-btn-close');
    open = false;
});