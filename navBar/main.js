(function (window, document) {
    'use strict';
    const toggleBtn = document.querySelector('#navbar__toglebutton');
    const list = document.querySelector('.list');
    const icons = document.querySelector('.icons');
    const $toggles = document.querySelectorAll('.toggles');

    toggleBtn.addEventListener('click', () => {
        /*    list.classList.toggle('active');
        icons.classList.toggle('active'); */
        toggleElements();
    });

    window.addEventListener('resize', () => {
        offElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('active');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('active');
        });
    }
})(window, document);
