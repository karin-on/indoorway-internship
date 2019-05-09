/**

 * Check TODOs in the code and provide answers for them.
 *
 * Additional:
 * 1. Show selected stuff description in the #description box.
 * 2. What else can shop have?
 - **Write your ideas here or add these functionalities and write here what you have done.**
 What I added:
 a) after adding a product to a cart, its amount in stock decreases;
 b) it's impossible to add to a cart a product which is out of stock;
 c) there is a warning beneath a description showing if a product you try to buy is out of stock;
 **/

// TODO: What does it do?
'use strict';
/*
Strict mode applied in a JavaScript document prevents from using 'bad' syntax which - when used - may cause mistakes in a code. Strict mode can be applied globally (for a whole document) or locally (for a single function). It must be declared at the beginning of a document/function. In a strict mode we CANNOT (just to name a few):
- use a variable without a previous declaration,
- overwrite some of global variables (e.g. NaN, Infinity),
- duplicate names of an object's keys,
- duplicate names of a function's parameters,
- using names reserved as keywords.
*/


var stuffToBuy = [
    {
        name: 'SamPhone X9',
        amount: 5,
        value: 1250,
        // TODO: Replace \x27 with ' char.
        desc: "It's like a fusion of Iphane and Samsong."
    },
    {
        name: 'TV MX3000 300"',
        amount: 3,
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
        //KN: document.querySelector( [CSS selector] );
        this.stuffSelect = document.querySelector('#stuffSelect');
        this.addStuffForm = document.querySelector('#addStuffForm');
        this.cartElement = document.querySelector('#cart');
        this.price = document.querySelector('#price');
        this.description = document.querySelector('#description');
        this.warning = document.querySelector('#warning');

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
        for (var i = 0; i < this.stuff.length; i++) {
            var stuffToAdd = this.stuff[i];
            this.addBuyOption(stuffToAdd);
        }
    },

    addBuyOption: function addBuyOption(thing) {
        // TODO: Other way of creating <option>
        // var option = '<option value="'+ thing.name +'">'+ thing.name + '('+ thing.amount +')' +'</option>';
        // this.stuffSelect.innerHTML += option;

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
        // return this;
    },

    hideWarning: function hideWarning() {
        this.warning.innerHTML = '';
        // return this;
    },

    addToCart: function addToCart(index) {
        var index = index ? index : this.stuffSelect.selectedIndex;
        console.log(index);

        var stuff = {
            // TODO: How we call this statement?
            //KN: ternary operator
            // name: index ? this.stuff[index].name : this.stuffSelect.selectedOptions[0].value,
            name: this.stuff[index].name,
            amount: 1
        };
        // TODO: Other way of adding elements to an array?
        // this.cart[this.cart.length] = stuff;
        //KN: this.cart.push(stuff);

        if (this.isAvailable(index)) {
            this.cart.push(stuff);
            this.stuff[index].amount--;
            this.populateStuffSelect();
        } else {
            this.showWarning();
        }

        return this;
    },

    updateCart: function updateCart() {     //zamienia tablicę cart na HTML
        this.cartElement.innerHTML = '';
        for(var i = 0; i < this.cart.length; i++) {
            // TODO: Other way of creating <li>?
            // this.cartElement.innerHTML += '<li>'+ this.cart[i].name +'</li>'

            var li = document.createElement('li');
            li.innerHTML = this.cart[i].name;
            this.cartElement.appendChild(li);
        }

        return this;
    },

    showPrice: function showPrice(index) {
        this.price.innerHTML = `${stuffToBuy[index].value} PLN`;
    },

    showDescription: function showDescription(index) {
        // TODO: Display description of thing you want to buy
        this.description.innerHTML = stuffToBuy[index].desc;
    },

    /**
     * Events
     **/
    onStuffChange: function onStuffChange() {       //zmiana selecta
        // TODO: Update description of thing you just chosen
        shopApp.showPrice(shopApp.stuffSelect.selectedIndex);
        shopApp.showDescription(shopApp.stuffSelect.selectedIndex);

        !shopApp.isAvailable(shopApp.stuffSelect.selectedIndex) ?
            shopApp.showWarning() :
            shopApp.hideWarning();
    },

    // TODO: How we call this expression?
    //KN: We call this expression 'fat arrow function'
    onStuffAdd: (event) => {        //submit forma
        event.preventDefault();
        // TODO: Other way to call shopApp.addToCart()?
        // shopApp.addToCart();
        //KN: 1. way:
        // shopApp.addToCart.apply(shopApp);
        //KN: 2. way:
        shopApp.addToCart.call(shopApp);

        shopApp.updateCart();
    }
}

// TODO: Why we can do this?
//KN: We can chain these methods because they return 'this' - a current object instance. This way we make sure every next method is invoked on return value of the previous one.
shopApp.init(stuffToBuy).addToCart().addToCart(1).updateCart();
