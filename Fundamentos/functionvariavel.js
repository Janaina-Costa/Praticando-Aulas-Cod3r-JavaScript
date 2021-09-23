//função anonima
const soma = function(a,b){
    console.log(a+b)
}
soma(8,9)

//arrow function
const div = (a,b)=>{
    if(b===0){
        return 'Divisão impossivel'
    }else{
        return a/b
    }
}
console.log(div(6,-1))

//suprimindo chaves e return
const soma2= (a,b)=> a+b
console.log(soma2(8,9))

const cumprimenta = (texto)=>console.log(texto)
cumprimenta('olá mané')