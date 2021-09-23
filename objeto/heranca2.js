const matriz = {
    nome: 'Mega Dog',
    bairro: ''
}

const filial1 = Object.create(matriz)

filial1.bairro ='Freguesia'
console.log(`${filial1.nome} - loja ${filial1.bairro}`)


const pai = {
    nome: 'Paulo',
    corCabelo: 'ruivo'
}

const filha = Object.create(pai, {
    nome: { value: 'Débora', writable: false, enumerable: true}
})
console.log(`${filha.nome} tem cabelo ${filha.corCabelo}`)
console.log(Object.keys(filha))

for(let key in filha){
    filha.hasOwnProperty(key) ?
    console.log(key) : console.log(`Tem ${key} por herança.`)
}