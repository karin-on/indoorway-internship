'use strict';

export default () => {
    const container = document.querySelector('.container');
    const mainContent = document.createElement('main');
    mainContent.classList.add('main-content');
    container.appendChild(mainContent);
};