const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if (getCookie('modalClosed') !== 'closed' || getCookie('modalClosed') === undefined) {
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modalClosed', 'closed');
});

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    if (document.cookie) {
        const pairs = document.cookie.split('; ');
        let result = pairs.find(p => p.startsWith(name + '='));
        return result.substring(name.length + 1);
    }
}
