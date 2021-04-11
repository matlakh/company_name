document.addEventListener("DOMContentLoaded", function () {

    const header_swiper = new Swiper('.header_swiper', {
        loop: true,
        loopedSlides: '1',
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.arrow-left',
            prevEl: '.arrow-right',
        },
    });


    if(window.innerWidth >= 1100){
        const portfolio_swiper = new Swiper('.portfolio_swiper', {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: false,
            navigation: {
                nextEl: '.right-arrow',
                prevEl: '.left-arrow',
            },
        });
    } 
    if(window.innerWidth <= 1100){
        const portfolio_swiper = new Swiper('.portfolio_swiper', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: false,
            navigation: {
                nextEl: '.right-arrow',
                prevEl: '.left-arrow',
            },
        });
    }

    if(window.innerWidth <= 1060){
        const portfolio_swiper = new Swiper('.portfolio_swiper', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 10,
            pagination: false,
            navigation: {
                nextEl: '.right-arrow',
                prevEl: '.left-arrow',
            },
        });
    }
    if(window.innerWidth <= 612){
        const portfolio_swiper = new Swiper('.portfolio_swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: false,
            navigation: {
                nextEl: '.right-arrow',
                prevEl: '.left-arrow',
            },
        });
    }
})