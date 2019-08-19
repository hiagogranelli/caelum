(function () {
    'use strict';

    const mural = document.querySelector('.mural');
    mural.addEventListener('click', function(event) {
       let isRemove = event.target.classList.contains('opcoesDoCartao-remove');
       if (isRemove) {
        const cartao = event.target.parentElement.parentElement;   
        cartao.classList.add('cartao--some');
        cartao.addEventListener('transitionend', () => cartao.remove());
       }
    });

})();