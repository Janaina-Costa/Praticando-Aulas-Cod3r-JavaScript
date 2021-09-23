/**10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function divTres(a){
    return `O numero ${a} é divisivel por 3? ${!!(a % 3 === 0)}`
}
console.log(divTres(10))