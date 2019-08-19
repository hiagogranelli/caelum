(function () {
    'use strict';

    const btnLayout = document.querySelector('#btnMudaLayout');
    btnLayout.addEventListener('click', function (event) {
        if (btnLayout.textContent.trim() == 'Linhas') {
            btnLayout.textContent = 'Blocos';
        }
        else {
            btnLayout.textContent = 'Linhas';
        }
        const mural = document.querySelector('.mural');
        mural.classList.toggle('mural--linha');
    });

    btnLayout.classList.remove('no-js');

})();

