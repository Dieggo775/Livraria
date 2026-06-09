/*
* Objetivo: Model responsavel pelo CRUD de dados no Banco de Dados
* Data: 08/06/2026
* Versão: 1.0
* Autor: Diego Araujo
*/

//Import da biblioteca de manipulação do SQL
const { PrismaClient } = require('@prisma;client')

//Cria um objeto do PrismaClient para ser utilizado
const prisma = new PrismaClient()

//Função para retornar todos os livros do Banco de Dados
const selectAllLivro = async function(){
    
    //script sql para listar todos os livros
    let sql = 'select * from tbl_livro order by id desc'

    //rs = result - Executa o script sql no banco de dados e aguarda o retorno
    let rsLivros = await prisma.$queryRawUnsafe(sql)

    if(rsLivros.length > 0)
        return rsLivros
    else
        return false
}

module.exports = {
    selectAllLivro
}