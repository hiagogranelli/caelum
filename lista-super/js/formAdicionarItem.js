; (function() {
    'use strict';

    const form = document.querySelector('#formAdicionarItem')
    const alertaForm = document.querySelector('#alertaFormulario')

    form.addEventListener('submit', () => {
        event.preventDefault();
        const campoTexto = document.querySelector('#nomeItem');
        let isVazio = campoTexto.value.trim().length === 0;
        if (isVazio === true) {
            alertaForm.classList.remove('d-none');
            campoTexto.focus();
        }
        else {
            alertaForm.classList.add('d-none')
            let conteudo = campoTexto.value;
            campoTexto.value = '';
            moduloTabela.adicionarLinha(conteudo);
            moduloSync.sincronizar();
        }

    })
})()