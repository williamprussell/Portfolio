$('.work').click(function (e) {
    console.log("hello");
    $('html, body').animate({
        scrollTop: $('.case-study-set-1').offset().top
    }, 1000);
});