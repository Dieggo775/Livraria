/*
* Objetivo: API para realizar o CRUD de dados de Livros
* Data: 06/06/2026
* Versão: 1.0
* Autor: Diego Araujo
*/

/* Roteiro para instalação e configuração das bibliotecas 
* Express: npm install express --save (instalado para criar a API)
* Cors: npm install cors --save (configuração de acesso da API)
* Body-Parser: npm install body-parser --save (configuração para receber os dados do body no POST ou PUT)
*
* Fastfy: npm install fastify --save (OPCIONAL)
*/

// Import das bibliotecas
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Criando o objeto app a ser utilizado para configurar as rotas e iniciar o servidor
const app = express(); 

//request - Chegada de dados na API
//response - Saída de dados da API
//next - Próxima função a ser executada (middleware)
app.use((request, response, next) => {
    //Configurações de CORS para liberar o acesso da API para qualquer aplicação
    response.header('Access-Control-Allow-Origin', '*');

    //Configurações de CORS para liberar os métodos de requisição da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    
    app.use(cors());
    next();
});

//EndPoints da API para receber os dados do body da requisição
app.get('/v1/livraria/livro', cors(), async function (request, response){ 
    let dadosLivros = {livros: 
        [
            {
                id: 1,
                title: "O Senhor dos Anéis",
                autor: "J.R.R. Tolkien",
                Valor: "50"
            },
            {
                id: 2,
                title: "Game of Thrones",
                autor: "George R.R. Martin",
                Valor: "50"
            },
            {
                id: 3,
                title: "Millenium",
                autor: "Stieg Larsson",
                Valor: "50"
            }
        ]
    }
    response.status(200);
    response.json(dadosLivros);
});

app.use(bodyParser.json());

//Define uma porta para o servidor
const PORT = 8080;

//Cria uma rota de teste para verificar se a API está funcionando
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});