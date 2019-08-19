; (function() {
    
    $('#busca').on('input', function() {
        let termo = $(this).val().trim();

        if (termo.length > 0) {
            $('.cartao').hide().filter(function() {
               return $(this).find('.cartao-conteudo').text().match(new RegExp(termo, "i"));
            }).show();
        }
        else {
            $('.cartao').show();
        }
    });
    $('#busca').removeClass('no-js');
})()