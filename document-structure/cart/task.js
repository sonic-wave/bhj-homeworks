const value = document.querySelectorAll('.product__quantity-value');
const increase = document.querySelectorAll('.product__quantity-control_inc');
const decrease = document.querySelectorAll('.product__quantity-control_dec');
const product = document.querySelectorAll('.product');
const add = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');
const cartImage = document.querySelectorAll('.product__image');
let cartProductArray = document.getElementsByClassName('cart__product');

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

        let cartProduct = document.createElement('div');

        cartProduct.classList.add('cart__product');
        cartProduct.setAttribute('data-id', product[i].getAttribute('data-id'));
        cartProduct.innerHTML = `<img class="cart__product-image" src="${cartImage[i].src}"><div class="cart__product-count">${value[i].innerHTML}</div>`;

        let checkProduct = cartProduct.getAttribute('data-id');
        let productInCart = Array.from(cartProductArray).find(element => element.getAttribute('data-id') == checkProduct);

        if (productInCart) {
            let cartValue = productInCart.querySelector('.cart__product-count');

            cartValue.innerHTML = parseInt(cartValue.innerHTML) + parseInt(value[i].innerHTML);
        } else {
            cart.appendChild(cartProduct);
        }
    });
}
