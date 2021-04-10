document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper('.swiper-container', {
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
            nextEl: '.arrow-right',
            prevEl: '.arrow-left',
        },


    });

})