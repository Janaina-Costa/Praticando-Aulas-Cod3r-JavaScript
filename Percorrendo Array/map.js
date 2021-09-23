const numeros = [1,2,3,4,5,6,7,8]

let resultado = numeros.map((valor)=> valor*2)
console.log(resultado)

//let resultadosSucessivos jogando função dentro de função
const soma10 = a => a+10
const triplo = a => a*3
const trsnfDinheiro = a => `R$ ${parseFloat(a).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(trsnfDinheiro)
console.log(resultado)


const carrinho = [

    //formato jason
    '{"nome":"Borracha", "Preco": 2.45}',
    '{"nome":"Caderno", "Preco": 15.90}',
    '{"nome":"Lapiseira", "Preco": 5.45}',
    '{"nome":"Caneta", "Preco": 4.20}'

]

//pegar somente o preço

const paraObjeto = json => JSON.parse(json) //transforma json em objeto
const apenasPreco = valor => valor.Preco

const resultaso2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(`${resultaso2}`)


//implementando map = criando map no braço
Array.prototype.map2 = function(callback){
    const newArray = []
    for(i=0; i< this.length;i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const nums = [25,35,45,55,65,75,85,95]

const divide = x=>x/5

const result = nums.map2(divide)
console.log(result)

//que é exatamente o mesmo que o exemplo abaixo
console.log(nums.map2((valor)=>valor/5))


