const moduloCartao = (function () {
    'use strict';

    const reativaEventos = (cartao) => {
        // função que vai reativar os eventos dos cartões
        // const cartoes = document.querySelectorAll('.cartao');
        // cartoes.forEach(cartao => {
            cartao.addEventListener('focusin', function () {
                cartao.classList.add('cartao--focado')
            });
            cartao.addEventListener('focusout', function () {
                cartao.classList.remove('cartao--focado')
            });
            cartao.addEventListener('change', function (event) {
                let isRadio = event.target.classList.contains('opcoesDoCartao-radioTipo');
                if (isRadio) {
                    cartao.style.backgroundColor = event.target.value;
                }
            })
            cartao.addEventListener('keyup', event => {
                let isLabel = event.target.classList.contains('opcoesDoCartao-tipo');
                if (isLabel && (event.key === 'Enter' || event.key === ' ')) {
                    event.target.click();
                }
            });
            cartao.addEventListener('click', event => {
                let isRemove = event.target.classList.contains('opcoesDoCartao-remove');
                if (isRemove) {
                    cartao.classList.add('cartao--some');
                    cartao.addEventListener('transitionend', () => {
                        cartao.remove()
                        moduloSync.sincronizar();
                    });
                }
            });
        // });
    }

    //retorna um objeto que vai representar um módulo na aplicação inteira
    return {
        // método 'reativarCartao' é público para acesso
        // e ele mapeia a chamada para a função reativaEventos (interna)
        reativarCartao : reativaEventos
    }

})();