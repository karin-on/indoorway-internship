'use strict';

export default () => {
    const mainContent = document.querySelector('.main-content');
    const products = document.createElement('section');
    products.classList.add('main-content__products');

    products.innerHTML = `
        <h2 class="products__header">Please add things you want to buy:</h2>

        <form class="products__form" id="addStuffForm" action="#">
            <label class="form__label" for="stuffSelect">Stuff:</label>
            <div class="form__custom-select">
                <select class="form__select" name="stuff" id="stuffSelect"></select>
            </div>
            <button class="form__button" type="submit">Add</button>
        </form>

        <p class="products__warning" id="warning"></p>
        <p class="products__price">Price: <span id="price"></span></p>
        <p class="products__description">Description: <span id="description"></span></p>
    `;

    mainContent.appendChild(products);
}