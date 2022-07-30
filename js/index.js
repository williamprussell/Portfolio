$('.work').click(function (e) {
    console.log("hello");
    $('html, body').animate({
        scrollTop: $('.case-study-set-1').offset().top
    }, 1000);
});

$('.about').click(function (e) {
    console.log("hello");
    $('html, body').animate({
        scrollTop: $('#about-me').offset().top
    }, 1500);
});