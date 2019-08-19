; (function () {
    'use strict';

    const form = document.querySelector('.formNovoCartao');
    form.addEventListener('submit', event => {
        event.preventDefault();
        const caixaTexto = form.querySelector('.formNovoCartao-conteudo');
        let isVazio = caixaTexto.value.trim().length === 0;
        if (isVazio) {
            const msg = document.createElement('div');
            msg.classList.add('formNovoCartao-msg');
            msg.textContent = 'Por favor, preencha o campo com alguma coisa!';
            form.append(msg); // append insere dentro do formulário e no fim
            msg.addEventListener('animationend', () => msg.remove());
        }
        else {
            let conteudo = caixaTexto.value;
            caixaTexto.value = '';
            const infoCartao = { conteudo : conteudo };
            moduloMural.adicionarCartaoNoMural(infoCartao);
            moduloSync.sincronizar();
        }
    });
    form.classList.remove('no-js');


})()