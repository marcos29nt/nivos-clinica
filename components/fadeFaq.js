export const fade = () => {
    const quest = document.querySelectorAll('.quest');
    const res = document.querySelectorAll('.res');


    quest.forEach((questItem, ind) => {
        const icon = questItem.querySelector('.ic');
        const resCurrent = res[ind];

        questItem.addEventListener('click', () => {
            resCurrent.classList.toggle('open');
            icon.classList.toggle('rotate');
        })
    })
}

