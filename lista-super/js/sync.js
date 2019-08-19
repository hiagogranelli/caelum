const moduloSync = (function () {

    'use strict';

    // INSTRUÇÃO 1
    const badge = document.querySelector('.badge-info')

    const getItens = async () => {
        const res = await fetch('api/sync.php?acao=get-itens');
        const json = await res.json();
        if (json.status == 1) {
            // INSTRUÇÃO 2
            json.itens.forEach(conteudo => {
                moduloTabela.adicionarLinha(conteudo.conteudo);
            })
            // INSTRUÇÃO 3
            moduloTabela.mostraOuEsconde();
        }
    }

    const sync = async () => {
        // INSTRUÇÃO 4
        badge.classList.remove('d-none')
        // INSTRUÇÃO 5
        const linhas = moduloTabela.getLinhas();
        let params = `acao=salvar-itens&itens=${JSON.stringify(linhas)}`;

        const configReq = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: params,
        }

        const res = await fetch(`api/sync.php`, configReq);
        const json = await res.json();
        // INSTRUÇÃO 6
        if (json.status == 1) {
            console.log('Operação realizada com sucesso')
        }
        // INSTRUÇÃO 7
        badge.classList.add('d-none');
    };


    getItens(); // INSTRUÇÃO 8

    return {
        sincronizar: sync
    }

})();