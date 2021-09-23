const alunos = [
    {nome:' João', nota: 5.6, bolsista:false},
    {nome:' Maria', nota: 9.9, bolsista:false},
    {nome:' Luiza', nota: 3.9, bolsista:false},
    {nome:' Pedro', nota: 5.25, bolsista:false},
    {nome:'Lara', nota: 10.00, bolsista:false}
]

const resultado = alunos.map((a)=>a.nota).reduce(function(acumulador, nota){
    //console.log(acumulador,nota )
    return acumulador + nota
},0)

//console.log(resultado)


//todods são bolsista?

const todosBolsistas = (resultado, bolsista)=> resultado && bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas))

//algum é bolsista?

const algumBolsista = (resultado, bolsista)=> resultado || bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista))

 //implementação

 Array.prototype.reduce2= function(callback){
     let acumulador =this[0]
     for(let i=1; i< this.length; i++){
         acumulador = callback(acumulador, this[i], i, this)
     }
     return acumulador
 }

 const nums = [2,3,4,5,8]

 const soma = (acumulador, valor)=> acumulador + valor
 console.log(nums.reduce2(soma))