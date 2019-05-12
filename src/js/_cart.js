'use strict';

export default () => {
    const mainContent = document.querySelector('.main-content');
    const cart = document.createElement('section');
    cart.classList.add('main-content__cart');

    cart.innerHTML = `
        <h2 class="cart__header">Stuff I want to buy:</h2>
        <ul id="cart" class="cart__list"></ul>
        <p class="cart__summary">Cart's value: <span id="cartValue"></span></p>
    `;

    mainContent.appendChild(cart);
}