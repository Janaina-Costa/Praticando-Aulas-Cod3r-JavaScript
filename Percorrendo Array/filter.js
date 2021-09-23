const produtos = [
    {nome:' prato', preco: 5.60, fragil: true},
    {nome:' panela', preco: 29.99, fragil: false},
    {nome:' bacia', preco: 3.99, fragil: false},
    {nome:' copo de vidro', preco: 2.25, fragil: true},
    {nome:'bandeja', preco: 10.00, fragil: true}
]

const caro = produto => produto.preco >=10
const fragil =produto => produto.fragil

const result = produtos.filter(caro).filter(fragil)
console.log(result)


//implementar filter = criar filter na mão

Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const caro1 = produto => produto.preco >=10
const fragil1 =produto => produto.fragil

const result1 = produtos.filter2(caro1).filter2(fragil1)
console.log(result1)
