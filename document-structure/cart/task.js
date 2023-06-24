const value = document.querySelectorAll('.product__quantity-value');
const increase = document.querySelectorAll('.product__quantity-control_inc');
const decrease = document.querySelectorAll('.product__quantity-control_dec');
const product = document.querySelectorAll('.product');
const add = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');
const cartImage = document.querySelectorAll('.product__image');

for (let i = 0; i < increase.length; i++) {
    increase[i].addEventListener('click', () => {
        value[i].innerHTML++; 
    });
}

for (let i = 0; i < decrease.length; i++) {
    decrease[i].addEventListener('click', () => {
        if (value[i].innerHTML > 1) {
            value[i].innerHTML--; 
        }
    });
}

for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', (e) => {
        e.preventDefault();
        const cartProduct = document.createElement('div');
console.log(cart.contains(cartProduct.getAttribute('data-id')))

        cartProduct.classList.add('cart__product');
        cartProduct.setAttribute('data-id', product[i].getAttribute('data-id'));
        cartProduct.innerHTML = `<img class="cart__product-image" src="${cartImage[i].src}"><div class="cart__product-count">${value[i].innerHTML}</div>`;
        if (1) {
            cart.appendChild(cartProduct);
            console.log(product[i].getAttribute('data-id'));
        }
    });
}