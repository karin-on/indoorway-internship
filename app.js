/**

 * Check TODOs in the code and provide answers for them.
 *
 * Additional:
 * 1. Show selected stuff description in the #description box.
 * 2. What else can shop have?
 - **Write your ideas here or add these functionalities and write here what you have done.**
 **/

// TODO: What does it do?
'use strict';

var stuffToBuy = [
    {
        name: 'SamPhone X9',
        amount: 3,
        value: 1250,
        // TODO: Replace \x27 with ' char.
        desc: 'It\x27s like a fusion of Iphane and Samsong.'
    },
    {
        name: 'TV MX3000 300"',
        amount: 1,
        value: 3000,
        desc: 'Biggest TV you can imagine.'
    }
];

var shopApp = {
    init: function(stuffToBuy) {

        // State
        this.stuff = stuffToBuy;
        this.cart = [];

        // HTML Elements
        // TODO: Do you know other ways of getting elements?
        this.stuffSelect = document.getElementById('stuffSelect');
        this.addStuffForm = document.getElementById('addStuffForm');
        this.cartElement = document.getElementById('cart');
        this.description = document.getElementById('description');

        // Bind events
        this.stuffSelect.addEventListener('change', this.onStuffChange);
        this.addStuffForm.addEventListener('submit', this.onStuffAdd);

        this.populateStuffSelect();

        this.showDescription(0);

        return this;
    },

    populateStuffSelect: function populateStuffSelect() {
        // Populate with buy options
        for (var i = 0; i < this.stuff.length; i++) {
            var stuffToAdd = this.stuff[i];
            this.addBuyOption(stuffToAdd);
        }
    },

    addBuyOption: function addBuyOption(thing) {
        // TODO: Other way of creating <option>
        var option = '<option value="'+ thing.name +'">'+ thing.name + '('+ thing.amount +')' +'</option>';
        this.stuffSelect.innerHTML += option;

        return this;
    },

    addToCart: function addToCart(index) {
        var stuff = {
            // TODO: How we call this statement?
            name: index ? this.stuff[index].name : this.stuffSelect.selectedOptions[0].value,
            amount: 1
        }
        // TODO: Other way of adding elements to an array?
        this.cart[this.cart.length] = stuff;

        return this;
    },

    updateCart: function updateCart() {
        this.cartElement.innerHTML = ''
        for(var i = 0; i < this.cart.length; i++) {
            // TODO: Other way of creating <li>?
            this.cartElement.innerHTML += '<li>'+ this.cart[i].name +'</li>'
        }

        return this;
    },

    showDescription: function showDescription(index) {
        // TODO: Display description of thing you want to buy
    },

    /**
     * Events
     **/
    onStuffChange: function onStuffChange() {
        // TODO: Update description of thing you just chosen
    },

    // TODO: How we call this expression?
    onStuffAdd: (event) => {
        event.preventDefault();
        // TODO: Other way to call shopApp.addToCart()?
        shopApp.addToCart();
        shopApp.updateCart();
    }
}

// TODO: Why we can do this?
shopApp.init(stuffToBuy).addToCart().addToCart(1).updateCart();