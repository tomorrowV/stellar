$(document).ready(function() {
    $('.header__menu-toggle').click(function(event) {
        $('.header__menu-toggle,.header__nav,.header__content').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

$(document).ready(function(){
    $(".header, .home").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function () {
    $('.testimonials__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        speed: 650,
        easing: 'ease-in-out',
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true
    });
});

window.addEventListener('scroll', function(e) {
    var el = document.querySelector('.stats');
    if (window.scrollY + window.outerHeight - 350 > el.offsetTop) {
    
      $(function() {
        $('.first').animate({num: 213 - 3}, {
            duration: 6000,
            step: function(num) {
                this.innerHTML = (num + 3).toFixed(0);
            }
        });
        $('.second').animate({num: 173 - 3}, {
            duration: 6000,
            step: function(num) {
                this.innerHTML = (num + 3).toFixed(0);
            }
        });
        $('.third').animate({num: 35 - 3}, {
            duration: 6000,
            step: function(num) {
                this.innerHTML = (num + 3).toFixed(0);
            }
        });
        $('.fourth').animate({num: 2319 - 3}, {
            duration: 6000,
            step: function(num) {
                this.innerHTML = (num + 3).toFixed(0);
            }
        });
      });
  
    }
  });
