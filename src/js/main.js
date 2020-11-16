import swiper from './swiper.js';
import result from './result.js';
import navbar from './navbar.js';

const main = {
    init: () => {
        swiper.init();
        result.init();
        navbar.init();
    }
}

document.addEventListener('DOMContentLoaded', main.init);