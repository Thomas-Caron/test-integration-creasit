const swiper = {
    init: () => {
        new Swiper('.swiper-container', {
            autoplay: {
                delay: 5000,
            },
            speed: 800,
            loop: true,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            keyboard: {
                enabled: true,
            },
        });
    }
}

export default swiper;