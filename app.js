/***************************************************************************
 * Objetivo: Apresentar comandos básicos do node.js
 * Autor: Carlos Eduardo
 * Data: 29/07/2025
 * Versão: 1.0
 ***************************************************************************/

// Import da classe readline no node.js
var readline = require('readline')

//Cria uma interface de comunicação com o terminal para entrada e saída de dados
// interagindo com o usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome:' , function(nome){
  
    var nomeUsuario = nome

    //Validação da entrada de dados
    if(nomeUsuario == '') {
        console.log('ERRO: Não foi possível processar a requisição, campo obrigatório')
    }else{
    //String() -> Converteuma variável em string
    //.toUppercase() -> converte o conteúdo de uma variável em maiúsciulo
    console.log("O nome digitado foi: " + String(nomeUsuario).toUpperCase())
    console.log(nome)
    }
})


/*
//Permite escrever um conteúdo de uma String ou objeto no terminal
console.log('aula 01 de node.JS')

// var Permite "criar uma variável
var nome = '777'

// Exemplo de concatenação de conteúdo de uma (String + variável)
console.log('O nome digitado foi: ' + nome)

// Concatenando usando a crase 
console.log(`O nome digitado foi: ${nome}!`)

//typeof() -> Retorna o tipo de dados da variável ou objeto
console.log(typeof(nome))
*/