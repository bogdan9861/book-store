$(function(){

    $('.main__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        lazyLoad: 'ondemand',
        asNavFor: '.main__content-slider',
        
    });

    $('.main__content-slider').slick({
        arrows: false,
        asNavFor: '.main__slider',
        fade: true
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();
        $('.tab').removeClass('tab--active');
        $('.tabs__content').removeClass('tabs__content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs__content--active');
    })

    $('.price__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="arrows left-arrow"> <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50737 14L9.49316 12.0142L4.47896 7L9.49316 1.9858L7.50737 -8.6802e-08L0.507364 7L7.50737 14Z" fill="#959595"/></svg>',
        nextArrow: '<button class="arrows right-arrow"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.49263 -2.83734e-06L0.506836 1.9858L5.52104 7L0.506836 12.0142L2.49263 14L9.49264 7L2.49263 -2.83734e-06Z" fill="#959595"/></svg></button>',
    });

    $('.news__slider').slick({
        prevArrow: '<button class="arrows left-arrow news-arrow"> <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50737 14L9.49316 12.0142L4.47896 7L9.49316 1.9858L7.50737 -8.6802e-08L0.507364 7L7.50737 14Z" fill="#959595"/></svg>',
        nextArrow: '<button class="arrows right-arrow news-arrow"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.49263 -2.83734e-06L0.506836 1.9858L5.52104 7L0.506836 12.0142L2.49263 14L9.49264 7L2.49263 -2.83734e-06Z" fill="#959595"/></svg></button>',
        autoplay: true,
    })

    $('.advantages__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="arrows left-arrow advantages-arrows"> <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50737 14L9.49316 12.0142L4.47896 7L9.49316 1.9858L7.50737 -8.6802e-08L0.507364 7L7.50737 14Z" fill="#959595"/></svg>',
        nextArrow: '<button class="arrows right-arrow advantages-arrows"><svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.49263 -2.83734e-06L0.506836 1.9858L5.52104 7L0.506836 12.0142L2.49263 14L9.49264 7L2.49263 -2.83734e-06Z" fill="#959595"/></svg></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
    });
  
});
