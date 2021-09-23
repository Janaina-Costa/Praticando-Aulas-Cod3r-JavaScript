console.log(this === global)//fora da função this aponta para o module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function nowThis(){
    console.log('estou dentro de uma função')
    console.log(this === module.exports)
    console.log(this === global)//dentro da função this aponta para global
    

}
nowThis()