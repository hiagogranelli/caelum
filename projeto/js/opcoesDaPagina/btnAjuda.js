; (function () {
    'use strict';
    // pegar a referencia do botão na página
    const btn = document.querySelector('#btnAjuda');
    // adicionar o evento click ao botão
    btnAjuda.addEventListener('click', async () => {
        const resposta = await fetch('https://ceep.herokuapp.com/cartoes/instrucoes');
        const instrucoesJson = await resposta.json();
        const ajudas = instrucoesJson.instrucoes;
        // percorre os dados da lista 
        ajudas.forEach(ajudaObj => {
            moduloMural.adicionarCartaoNoMural(ajudaObj);
        });
    });
    // exibe o botão na interface
    btnAjuda.classList.remove('no-js')

})()