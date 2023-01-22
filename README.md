# ApiFeriado
Criada com base no projeto https://github.com/ginco-urbanismo/testebackend 
## Rotas:

* ### (POST) /api/inserirJson
Adiciona o arquivo 'feriados_nacionais_2023.json' no banco de dados. Retorna status 200 para sucesso e 500 em caso de erro
* ### (POST) /api/criaferiado   
Recebe um bodyRequest e insere os dados na tabela. Retorna status 201 para sucesso, e status 500 em caso de erro  
* ### (DELETE) /api/feriadoDelete?id=
Recebe como parametro um id e apaga um feriado na tabela de acordo com o id informado. Retorna 200 para sucesso, e 500 em caso de erro
* ### (DELETE) /api/feriadoDeleteAll
Deleta todos os dados da tabela. Retorna status 200 para sucesso e 500 apontando erro
* ### (GET) /api/feriadoGetAll
Retorna status 200 para sucesso e todos os feriados cadastrados no banco, em caso de erro é retornado o status 500
* ### (GET) /api/feriadoGetOne?date=YYYY-MM-DD
1. Recebe como parametro date=YYYY-MM-DD e busca um feriado (caso haja) na data informada. 
2. Caso a data seja inválida retorna o status 201 e a instrução para a busca. 
3. Se a data informada não for um feriado é retornado o status(202) e uma mensagem dizendo "essa data não é um feriado". 
4. Se a data informada for válida e for um feriado é retornado o status(200) e o feriado desejado
* ### (PUT) /api/feriadoUpdate?id=
Recebe como parâmetro um id e atualiza um feriado na tabela de acordo com o id informado. Retorna 200 para sucesso, e 500 em caso de erro


## Services:

* ### verificaData
 Verifica se a data informada é válida no formato DD-MM-YYYY
* ### convertData
Converte o formato da data para o padrão DateTime
* ### prismaClient
Instância o prismaCliente para ser utilizado em todas as rotas
