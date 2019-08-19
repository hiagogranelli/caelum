<?php 

header("Content-Type: application/json; charset=UTF-8");

if (isset($_GET['acao']) and $_GET['acao'] === 'get-itens') 
{
    $todo_json = file_get_contents( __DIR__ . '/db/todo.json' );

    if ($todo_json) 
    {
        echo json_encode(
            array(
                'status' => '1',
                'itens' => json_decode($todo_json),
            )
        );
    }
    else 
    {
        echo json_encode(
            array(
                'status' => '0',
                'itens' => [],
                'mensagem' => 'Não há itens para serem exibidos!'
            )
        );
    }

    exit;
}

if (isset($_POST['acao']) and $_POST['acao'] == 'salvar-itens') 
{
    $json_data = $_POST['itens'];
    file_put_contents( __DIR__ . '/db/todo.json', $json_data );
    echo json_encode(
        array(
            'status' => '1',
            'mensagem' => 'Dados salvos com sucesso!',
        )
    );

    exit;
}