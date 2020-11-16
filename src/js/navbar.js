const navbar = {
    init: () => {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const headerElement = document.querySelector('header');
            let scroll = window.scrollY;
            if (scroll > lastScroll || scroll < 50) {
                headerElement.classList.remove('header--fixed');
            } else {
                headerElement.classList.add('header--fixed');
            }
            lastScroll = scroll;
        });
    }
};

export default navbar;