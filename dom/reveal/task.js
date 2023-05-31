let divReveal = document.querySelectorAll('.reveal');

function isVisible(element) {
    const { top, bottom } = element.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    }

    if (top > window.innerHeight) {
        return false;
    }

    return true;
}

document.addEventListener('scroll', () => {
    divReveal.forEach (element => {
        if (isVisible(element)) {
            element.classList.add('reveal_active');
        }
    })
});
