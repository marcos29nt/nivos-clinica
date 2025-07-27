export const nextCard = () => {
    const cards = document.querySelectorAll('.card');
    const btns = document.querySelectorAll('.ball')
    let current = 0;
    const timer = 7000;

    function showNext() {
        cards[current].classList.remove('ativo');
        btns[current].classList.remove('atual')

        current = (current + 1) % cards.length;

        cards[current].classList.add('ativo');
        btns[current].classList.add('atual')
    }

    const init = setInterval(showNext,timer);

}

