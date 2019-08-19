; const moduloTabela = ( () => {
    'use strict';

    const alertTabela = document.querySelector('#alertaTabela')
    const tabela = document.querySelector('#tabela')
    
    tabela.addEventListener('click',  (event) => {
        let isRemover = event.target.classList.contains('btn-remover');
        if (isRemover) {
            event.target.parentElement.parentElement.remove();
            mostraOuEscondeTabela();
            moduloSync.sincronizar();
        }
        
    });
    function getTodasLinhas() {
        const trs = document.querySelectorAll('tbody > tr');
        console.log(trs)
        const linhas = Array.from(trs).map( elemento => {
            return { conteudo: elemento.querySelector('td:first-child').textContent }
        });
        return linhas
        
    }
    function mostraOuEscondeTabela() {
        const linhas = getTodasLinhas()
        if (linhas.length === 0) {
            alertTabela.classList.remove('d-none');
            tabela.classList.add('d-none');
        }
        else {
            alertTabela.classList.add('d-none');
            tabela.classList.remove('d-none');
        }
    }
    function addNovaLinha(conteudo) {
        let linha = `
        <tr>
        <td>${conteudo}</td>
        <td>
            <button class="btn btn-danger btn-remover">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    </tr>`;
    
        tabela.querySelector('tbody').innerHTML+=linha;
        mostraOuEscondeTabela()
    }
    return {
        adicionarLinha : addNovaLinha,
        getLinhas : getTodasLinhas,
        mostraOuEsconde : mostraOuEscondeTabela
    }
})()