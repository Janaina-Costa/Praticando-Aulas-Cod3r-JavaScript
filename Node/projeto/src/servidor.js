const porta = 3003  //define a porta

const express = require('express') //importa o express
const app = express() //cria o app importando o express


//req, res, next são os padrões de middleware. Nem todos precisam ser usados

app.get('/produtos', (req, res, next)=>{//produtos é a url //get é o metodo do express e selecionavel no postman
    res.send({nome:'notebook', preco: 6123.45})//cria objeto qu é convertido automaticamente para JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor executado na porta ${porta}.`) //criando o escutador para rodar o nodemon a mensagem e o send no postman
})

//paralelo a isso o nodemon foi incluido no package-jason para rodar a aplicação