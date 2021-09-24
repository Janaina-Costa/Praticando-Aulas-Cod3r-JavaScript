const fs = require('fs')

const produtos ={
    nome: 'celular',
    preco: 1977.85,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produtos), err=>{
    console.log(err || 'Arquivo gerado com sucesso!')
})