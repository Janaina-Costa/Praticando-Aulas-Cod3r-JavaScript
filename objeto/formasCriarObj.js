 //1ª forma = criando objeto com notação literal 
 const objeto1 = {
     nome: 'janaina',
     idade: 39
 }
 console.log(objeto1)

 //2ª forma = object em JS
 let objeto2 = new Object
 console.log(typeof objeto2)
 objeto2 ={
     nome:'miah',
     idade: 2
 }
 console.log(objeto2)


 //3ª forma = funções contrutoras
 function produto (nome, preco, desconto){
     this.nome= nome//his torna publico
     this.getPrecoDesconto =() =>{
         return preco * (1- desconto)
     }
    }
 
 const p1 = new produto('penDriver', 15.99, 0.18)
 const p2 = new produto('mouse', 89.99, .15)
 console.log(p1.getPrecoDesconto(), p2.getPrecoDesconto())

 //4ª forma = fun~]ao factory

 function funcionario(nome, salarioBase, falta){
     return{
         nome,
         salarioBase,
         falta,
         getSalario(){
             return(salarioBase/30) * (30-falta) 
         }

     }
 }
 const fuc1 = new funcionario("josué", 1300.56, 10)
 console.log(`Saldo do salário com desconto de ${fuc1.falta} dias - R$ ${fuc1.getSalario()}`)


 //5ª forma = object.create

 const filha = Object.create(null)
 filha.nome = 'Mariana'
 filha.idade = 16
 console.log(filha)

//6ª forma = JSON.parse
const fromJSON = JSON.parse('{"nome": "Não sei o que dizer sobre isso"}')
console.log(fromJSON.nome)


 