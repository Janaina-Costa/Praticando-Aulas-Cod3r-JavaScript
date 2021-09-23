// Object.keys
//Object.values
//Objects.entries(arrays/r egistos)
const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 25
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//usando o destructuring []

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//defineProperty = cria nova propriedade para o objeto

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,//se enumera ou não a chave do objeto
    writable: false,
    value: '28/10/2006'
})

Object.defineProperty(pessoa, 'endereco', {
    enumerable:true ,
    writable: true,
    value:''
})
pessoa.dataNascimento = '01/01/2001'//vai ignorar pq é imodificavel
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
pessoa.endereco = 'Rua Mapendi, 5'

Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})

//Object.assign
const destino = {a:1}
const origem1 = {b:2}
const origem2 = {c:3, d:4, a:5, a:3}
const obj = Object.assign(destino, origem1, origem2)
console.log(obj)

