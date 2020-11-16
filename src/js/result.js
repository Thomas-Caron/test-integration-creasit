const result = {
    init: () => {
        document.querySelector('.actuality__button').addEventListener('click', (evt) => {
            const listElementNone = document.querySelectorAll('.actuality__none');
            listElementNone.forEach((elementNone) => {
                elementNone.classList.remove('actuality__none')
            });
            document.querySelector('.actuality__result').textContent = "Vous avez vu 12 résultats sur 12";
            document.querySelector('.actuality__button').style.display= "none";
        });
    },
};

export default result;