; const moduloMural = ( () => {
  'use strict';

  let numeroDoCartao = 0;
  const adicionarCartao = (dadosDoCartao) => {
    numeroDoCartao++;
    const cartao = $(`
            <article id="cartao_1${numeroDoCartao}" style="background-color: ${dadosDoCartao.cor}" tabindex="0" class="cartao">
            <div class="opcoesDoCartao">
              <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg>
                  <use xlink:href="#iconeRemover"></use>
                </svg>
              </button>
      
              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo"
                checked>
              <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;"
                tabindex="0">
                Padrão
              </label>
      
              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}"
                class="opcoesDoCartao-radioTipo">
              <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;"
                tabindex="0">
                Importante
              </label>
      
              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
              <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;"
                tabindex="0">
                Tarefa
              </label>
      
              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}"
                class="opcoesDoCartao-radioTipo">
              <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;"
                tabindex="0">
                Inspiração
              </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${dadosDoCartao.conteudo}</p>
          </article>
            `);
    $('.mural').append(cartao);
    // cartao = objeto jQuery
    // cartao = objeto HTMLElement (original do JS)
    moduloCartao.reativarCartao(cartao[0]);
  }

  const getCartoesMural = () => {
    const cartoes = document.querySelectorAll('.cartao');
    const listaCartoes = Array.from(cartoes).map(cartao => {
      return {
        conteudo: cartao.querySelector('.cartao-conteudo').textContent,
        cor: getComputedStyle(cartao).getPropertyValue('background-color')
      }
    });
    return listaCartoes;
  }

  $.ajax({
    type: 'GET',
    url: 'https://ceep.herokuapp.com/cartoes/carregar',
    data: { usuario: 'hiago.granelli@gmail.com'},
    dataType: 'jsonp'
  })
  .done( respostaJson => {
    console.log(respostaJson);
    respostaJson.cartoes.forEach( cartao => adicionarCartao(cartao) );
  })
  .fail(error => console.error(error));

  return {
    adicionarCartaoNoMural: adicionarCartao,
    getCartoes : getCartoesMural
  }
})()