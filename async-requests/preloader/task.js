const loader = document.querySelector('.loader');
const item = document.querySelector('.item');
const items = document.getElementById('items');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        const valute = response.response.Valute;

        item.remove();
        
        Object.keys(valute).forEach(key => {
            let div = document.createElement('div');
            div.classList.add('item');
            items.appendChild(div);
            div.innerHTML = `<div class="item__code">${valute[key].CharCode}</div><div class="item__value">${valute[key].Value}</div><div class="item__currency">руб.</div>`;
        });

        loader.classList.remove('loader_active');
    }
}

