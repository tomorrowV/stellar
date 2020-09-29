$(document).ready(function() {
    $('.header__menu-toggle').click(function(event) {
        $('.header__menu-toggle,.header__nav,.header__content').toggleClass('active');
        $('body').toggleClass('lock');
    })
})