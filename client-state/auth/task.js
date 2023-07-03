const form = document.getElementById('signin__form');
const signIn = document.getElementById('signin');
const button = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const card = document.querySelector('.card');
const xhr = new XMLHttpRequest();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);

    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            const response = JSON.parse(xhr.responseText);

            if (response.success === true) {
                localStorage.setItem('user_id', response.user_id);
                welcome.classList.add('welcome_active');
                userId.textContent = response.user_id;
                signIn.classList.remove('signin_active');
                const title = document.createElement('h2');
                title.textContent = 'Вход';
                card.prepend(title);
            } else {
                alert('Неверный логин/пароль');
            }
        }
    }

});

window.onload = () => {
    const localId = localStorage.getItem('user_ids');

    if (localId) {
        welcome.classList.add('welcome_active');
        userId.textContent = localId;
        signIn.classList.remove('signin_active');
        const title = document.createElement('h2');
        title.textContent = 'Вход';
        card.prepend(title);
    }
}

