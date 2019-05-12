'use strict';

export default {
    cart: document.createElement('section'),

    render: function render() {
        const mainContent = document.querySelector('.main-content');
        this.cart.classList.add('main-content__cart');

        this.cart.innerHTML = `
            <h2 class="cart__header">Stuff I want to buy:</h2>
            <ul id="cart" class="cart__list"></ul>
            <p class="cart__value">Cart's value: <span id="cartValue"></span></p>
            
            <button class="cart__checkout-button" id="checkout">checkout</button>
        `;

        mainContent.appendChild(this.cart);
    },

    remove: function remove() {
        this.cart.remove();
    }
}