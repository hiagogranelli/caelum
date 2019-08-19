; const moduloSync = ( () => {
    'use strict';

    const btnSync = document.querySelector('#btnSync');
    btnSync.addEventListener('click', async () => {
        btnSync.classList.add('botaoSync--esperando');
        btnSync.classList.remove('botaoSync--sincronizado');
        const infoUsuario = {
            usuario: 'hiago.granelli@gmail.com',
            cartoes: moduloMural.getCartoes()
        }
        console.log(infoUsuario);
        let url = 'https://ceep.herokuapp.com/cartoes/salvar';
        const configReq = {
            method: 'POST',
            headers: { 'Content-type' : 'application/json' },
            body: JSON.stringify(infoUsuario)
        }
        try {
            const res = await fetch(url, configReq);
            const json = await res.json();
        }
        catch(err) {
            console.log (`
            ${json.quantidade} cartões salvos para o usuário ${json.usuario}
            `);
        }
        finally {
            btnSync.classList.replace('botaoSync--esperando', 'botaoSync--sincronizado')
        }
    })

    btnSync.classList.remove('no-js');

    return {
        sincronizar : () => btnSync.click()
    }

})()