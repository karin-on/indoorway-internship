'use strict';

export default () => {
    const container = document.querySelector('.container');
    const header = document.createElement('header');
    header.classList.add('header');

    header.innerHTML = `
        <h1 class="header__title">- Little Stuff Shop -</h1>
        <h4 class="header__subtitle">Buy what you want and feel happy</h4>
        <img class="header__logo" src="https://imageshack.com/a/img923/9881/F0N9Z0.png" alt="Shop with window and doors">
    `;

    container.appendChild(header);
};