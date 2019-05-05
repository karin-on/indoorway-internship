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
        desc: "It's like a fusion of Iphane and Samsong."
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
        //KN: document.querySelector( [CSS selector] );
        this.stuffSelect = document.querySelector('#stuffSelect');
        this.addStuffForm = document.querySelector('#addStuffForm');
        this.cartElement = document.querySelector('#cart');
        this.description = document.querySelector('#description');

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
        // var option = '<option value="'+ thing.name +'">'+ thing.name + '('+ thing.amount +')' +'</option>';
        // this.stuffSelect.innerHTML += option;

        var option = document.createElement('option');
        option.setAttribute('value', thing.name);
        option.innerHTML = `${thing.name} (${thing.amount})`;
        this.stuffSelect.appendChild(option);

        return this;
    },

    addToCart: function addToCart(index) {
        var stuff = {
            // TODO: How we call this statement?
            //KN: ternary operator
            name: index ? this.stuff[index].name : this.stuffSelect.selectedOptions[0].value,
            amount: 1
        };
        // TODO: Other way of adding elements to an array?
        // this.cart[this.cart.length] = stuff;
        this.cart.push(stuff);

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

    showDescription: function showDescription(index) {
        // TODO: Display description of thing you want to buy
        this.description.innerHTML = stuffToBuy[index].desc;
    },

    /**
     * Events
     **/
    onStuffChange: function onStuffChange() {       //zmiana selecta
        console.log(this);
        console.log(shopApp.stuffSelect.selectedIndex);
        // TODO: Update description of thing you just chosen
        shopApp.showDescription(shopApp.stuffSelect.selectedIndex);
    },

    // TODO: How we call this expression?
    //KN: fat arrow function
    onStuffAdd: (event) => {        //submit forma
        console.log(this);

        event.preventDefault();
        // TODO: Other way to call shopApp.addToCart()?
        shopApp.addToCart();
        shopApp.updateCart();
    }
}

// TODO: Why we can do this?
// shopApp.init(stuffToBuy).addToCart().addToCart(1).updateCart();
shopApp.init(stuffToBuy);   //dodaje options, pokazuje opis 1. produktu, podpina zdarzenia do selecta i form
shopApp.addToCart();        //dodaje 1. produkt do tablicy cart
shopApp.addToCart(1);       //dodaje 2. produkt do tablicy cart
// console.log(shopApp.cart);
shopApp.updateCart();       //zamienia tablicę cart na HTML