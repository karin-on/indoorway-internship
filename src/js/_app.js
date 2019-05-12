'use strict';

const shopApp = {
    init: function(stuffToBuy) {

        // State
        this.stuff = stuffToBuy;
        this.cart = {
            products: [],
            productsIDs: []
        };
        this.cartValue = 0;

        // HTML Elements
        this.stuffSelect = document.querySelector('#stuffSelect');
        this.addStuffForm = document.querySelector('#addStuffForm');
        this.cartElement = document.querySelector('#cart');
        this.price = document.querySelector('#price');
        this.description = document.querySelector('#description');
        this.warning = document.querySelector('#warning');
        this.cartValueElement = document.querySelector('#cartValue');

        // Bind events
        this.stuffSelect.addEventListener('change', this.onStuffChange);
        this.addStuffForm.addEventListener('submit', this.onStuffAdd);

        this.populateStuffSelect();

        this.showPrice(0);
        this.showDescription(0);

        return this;
    },

    populateStuffSelect: function populateStuffSelect() {
        this.stuffSelect.innerHTML = '';
        // Populate with buy options
        this.stuff.forEach(el => {
            this.addBuyOption(el);
        });
    },

    addBuyOption: function addBuyOption(thing) {
        var option = document.createElement('option');
        option.setAttribute('value', thing.name);
        option.innerHTML = `${thing.name} (${thing.amount})`;
        this.stuffSelect.appendChild(option);

        return this;
    },

    isAvailable: function isAvailable(index) {
        return this.stuff[index].amount > 0;
    },

    showWarning: function showWarning() {
        this.warning.innerHTML = "You can't buy this product anymore. It is no longer in stock.";
    },

    hideWarning: function hideWarning() {
        this.warning.innerHTML = '';
    },

    addToCart: function addToCart(index) {
        var ind = index ? index : this.stuffSelect.selectedIndex;

        var stuff = {
            id: this.stuff[ind].id,
            name: this.stuff[ind].name,
            price: this.stuff[ind].value,     //czy to jest potrzebne?
            amount: 1
        };

        if (this.isAvailable(ind)) {
            if (this.cart.productsIDs.includes(stuff.id)) {
                const ind = this.cart.productsIDs.indexOf(stuff.id);
                this.cart.products[ind].amount++;
            } else {
                this.cart.products.push(stuff);
                this.cart.productsIDs.push(stuff.id);
            }

            this.stuff[ind].amount--;
            this.populateStuffSelect();
            this.updateCartValue(this.stuff[ind].value);

        } else {
            this.showWarning();
        }

        return this;
    },

    updateCart: function updateCart() {
        this.cartElement.innerHTML = '';

        this.cart.products.forEach(el => {
            const li = document.createElement('li');
            li.classList.add('cart__item');

            const itemDescr = document.createElement('span');
            itemDescr.classList.add('item__description');

            const itemPrice = document.createElement('span');
            itemPrice.classList.add('item__price');

            const itemAmount = document.createElement('span');
            itemAmount.classList.add('item__amount');

            itemDescr.innerHTML = el.name;
            itemPrice.innerHTML = `USD ${el.price}`;
            itemAmount.innerHTML = `${el.amount} pcs`;
            li.appendChild(itemDescr);
            li.appendChild(itemPrice);
            li.appendChild(itemAmount);
            this.cartElement.appendChild(li);
        });

        return this;
    },

    showPrice: function showPrice(index) {
        this.price.innerHTML = `${this.stuff[index].value} USD`;
    },

    showDescription: function showDescription(index) {
        this.description.innerHTML = this.stuff[index].desc;
    },

    updateCartValue: function updateCartValue(value) {
        value ? this.cartValue += value : null;
        this.cartValueElement.innerHTML = `USD ${this.cartValue}`;

        return this;
    },

    /**
     * Events
     **/
    onStuffChange: function onStuffChange() {
        shopApp.showPrice(shopApp.stuffSelect.selectedIndex);
        shopApp.showDescription(shopApp.stuffSelect.selectedIndex);

        !shopApp.isAvailable(shopApp.stuffSelect.selectedIndex) ?
            shopApp.showWarning() :
            shopApp.hideWarning();
    },

    onStuffAdd: (event) => {
        event.preventDefault();
        shopApp.addToCart.call(shopApp);
        shopApp.updateCart();
    }
};

export { shopApp };