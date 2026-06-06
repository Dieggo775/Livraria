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

//Cria a aplicação Express
const app = express();

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