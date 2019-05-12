'use strict';

export default () => {
    const { body } = document;
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);
};