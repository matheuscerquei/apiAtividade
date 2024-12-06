const mysql = require("mysql2/promise");
const conexao = createPool(process.env.CONNECTION_STRING);

// "Banco de dados" em memória
/*const produto = [
    { id: 1, nome: 'Produto 1', quantidade: 10, preco: 100.00 },
    { id: 2, nome: 'Produto 2', quantidade: 5, preco: 50.00 },
];*/

//Criando uma função .  padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado}
async function listaclientes(){
    const resultado =  await conexao.query("SELEC * FROM cliente");
    return resultado[0]; 
}

//Criando uma função .  padrão básico: function nome_da_funcao(){ return dado_a_ser_retornado}
function listaProduto2(id){
return produto.find(c => c.id == id);
}
//função para inserir um cliente novo
function insereProduto(produto){
produto.push(produto);
}

function alteraProduto(id,dadosproduto){
const produtonovo =  produto.find(c => c.id == id);
if (produtonovo){
produtonovo.nome =  dadosproduto.nome;
produtonovo.quantidade = dadosproduto.quantidade;
produtonovo.preco = dadosproduto.preco;
} else {
    return("Deu ruim!");
}    
}

function removeProduto(id){
const indice = produto.findIndex(c => c.id == id);
produto.splice(indice,1);
}

//comando para que a função seja acessivel de fora do arquivo db.js
module.exports = {
listaclientes,
listaProduto2,
insereProduto,
alteraProduto,
removeProduto
}
