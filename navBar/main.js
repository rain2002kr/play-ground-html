(function (window, document) {
    'use strict';
    const toggleBtn = document.querySelector('#navbar__toglebutton');
    /* const menu = document.querySelector('.navbar__menu');
    const icons = document.querySelector('.navbar__icons'); */
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
