'use strict';

export default {
    render: function render() {
        const mainContent = document.querySelector('.main-content');
        const summary = document.createElement('section');
        summary.classList.add('main-content__summary');

        summary.innerHTML = `
            <h2 class="summary__header">Congratulations! You just bought:</h2>
            <ul id="summary" class="summary__list"></ul>
            <p class="summary__par">Come back to us soon!</p>
        `;

        mainContent.appendChild(summary);
    }
};