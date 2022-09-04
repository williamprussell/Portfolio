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

$('.contact').click(function (e) {
    console.log("hello");
    $('html, body').animate({
        scrollTop: $('.contact-form').offset().top
    }, 1500);
});