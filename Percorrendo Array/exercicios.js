/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final. */

const cumprimentar = (nome)=> 'Olá, '+ nome+' !'
console.log(cumprimentar('Janaina'))


/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
 */
const ageDay = (idade)=>{
    return idade*365
}

console.log(`Sua idade é equivalente a ${ageDay(40)} dias. `)

/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
 */

const calcSalario = (horas, salHora)=>{
    return console.log(`Seu salário é igual a R$ ${(horas * salHora).toFixed(2).replace('.', ',')}. `)
}
calcSalario(150, 40.5)

/**Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
 */

const mounthName = (numero)=>{
    switch(numero){
        case 1: return 'Janeiro'
        case 2: return 'Fevereiro'
        case 3: return 'Março'
        case 4: return 'Abril'
        case 5: return 'Maio'
        case 6: return 'Junho'
        case 7: return 'Julho'
        case 8: return 'Agosto'
        case 9: return 'Setembro'
        case 10: return 'Outubro'
        case 11: return 'Novembro'
        case 12: return 'Dezembro'
        default: return 'Mês inexistente'
    }
}
console.log(mounthName(8))


/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */

const maiorOuIgual = (num1, num2) =>{
    if(num1 > num2 || num1 === num2){
        return console.log(true)
        
    }else{
        return console.log(false)
    }
}
maiorOuIgual(10,7)


/*Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
 */

const inversoBy = (valor) =>{
    if(valor === true){
        return console.log(false)
    }else if(valor === false){
        return console.log(true)
    } else if(valor === Number || valor !== isNaN){
        return console.log(valor*(-1))
    }else{
        return console.log(`"booleano ou número esperados, mas o parâmetro é do
        tipo ${typeof(valor)}`)
    }
}
inversoBy(-7)


function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }

    console.log(inverso(-9))
    


/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/

function entreNumeros(number, min, max, inclusive=false){
  return inclusive? number>=min && number<=max : number>min && number<max
}
console.log(entreNumeros(27, 27, 69))

/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
 */
function multSemMult(n1, n2){
    let resultado = 0
    for(let i = 0; i< n2; i++){
        resultado += n1
    }
    return resultado
}

console.log(multSemMult(0,8))


/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

function repitNumber(numRepete, numVezes){
    let contador = 1
    const arr = []
    while (contador <= numVezes){
        arr.push(numRepete) 
        contador++
    }
    return arr
}

console.log(repitNumber(2,5))

function repitNumber2(numRepeat, numVezes){
    return Array(numVezes).fill(numRepeat)
}
console.log(repitNumber2(2,5))

/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
 */

function repitTranforme(vezes){
    let simbolo = '+'
    return  Array(vezes).fill(simbolo).join('')
}
console.log(repitTranforme(10))

function repitSinalMais(vezes){
    return '+'.repeat(vezes)
}
console.log(repitSinalMais(15))


/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
 */
const arr = ['a', 'b','c','d', 'ultimo']

function firstAndLast(){
    let first = arr.shift()
    let last = arr.pop()

    return [first, last]
}
console.log(firstAndLast())

/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro. */

const arr2 = ['a',2,5,'b','c',15,'d', 'ultimo']

const onlyNumber = numeros => typeof numeros === 'number'

function filtrarArray(){
    return arr2.filter(onlyNumber)
}
console.log(filtrarArray())

/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
 */
const obj = {
    nome: 'janaina',
    idade: 39,
    cidade: 'RJ'
}

function objetoParaArray(){
    return Object.entries(obj)
}

console.log(objetoParaArray())

/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
 */

const arr3 = [2,15,165,13,24,78,99,5,4,28]

function soemnetePares(){
    return arr3.filter((numeros, indice)=>{
        const nPar = numeros%2 ===0 
        const iPar  = indice%2 ===0

        return nPar && iPar
    })
}
console.log(soemnetePares())


/* A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos,
que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é
bissexto ou não.
*/
const checarAnoBisexto = (ano)=>{
    const diviQuatro = ano%4 ===0
    const divCemm = ano%100 === 0
    const divQuatrocentos = ano % 400 ===0

    return (diviQuatro && !divCemm) || divQuatrocentos
}

console.log(checarAnoBisexto(2016))

const checarAnoBisextoComFevereiro = ((ano)=>{
    return new Date(ano, 1, 29).getDate() === 29
})

console.log(checarAnoBisextoComFevereiro(2028))

/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */
const arr4 = [2,15,165,13,24,78,99,5,4,28]

const sumNumbers = ()=>{
    return arr4.reduce((acumulador, valor)=>acumulador+=valor, 0)
}
console.log(sumNumbers())

/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas. */

const obj2 = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150},
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}

]
const getPreco = valor => valor.preco

const sumPrecos = ()=>{
    return obj2.map(getPreco).reduce((acumulador, preco)=>acumulador+=preco,0).toFixed(2)
}
console.log(sumPrecos())


/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
 pretendese adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.
 */
const arr5 = [2,15,165,13,24,78,99,5,4,28, 23, 45]

const calcMedia = ()=>{
    const quantNumbers = arr5.length

    const sumNumbers = arr5.reduce((acumulador, numeros)=> acumulador+=numeros,0)

    return sumNumbers/quantNumbers
}
console.log(calcMedia())

/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá
ser de duas casas decimais, arredondando se necessário. */

const areaTriangulo = (b, a)=>{
    return ((b*a)/2).toFixed(2)
}

console.log(areaTriangulo(10,15))
console.log(areaTriangulo(7,9))
console.log(areaTriangulo(9.25, 13.1))

/*Criar uma função que receba um array de números e retorne o menor número desse array. */
const arr6 = [2,15,165,13,24,78,99,5,4,28,0, 23, 45]
const compara = (numero, numeroAtual)=> numero < numeroAtual? numero: numeroAtual

const menorDosArray=()=> {
    return arr6.reduce(compara)
}
console.log(menorDosArray())

function menorDosNumeros(){
    return Math.min(...arr6)
}
console.log(menorDosNumeros())
//maior numero
function maiorDosNumeros(){
    return Math.max(...arr6)
}
console.log(maiorDosNumeros())

/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado
um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado. */


const advinhaQualE = (numero)=>{
    const random = Math.floor(Math.random()*10)
    return numero === random? `Parabéns! O número sorteado foi ${random}`:
                            `Que pena! O número sorteado foi o ${random}`
}
console.log(advinhaQualE(8))

/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
 */

const frase = 'E a vida o que é, diga lá meu irmão'

const contaFrases = ()=>{
    const palavras = frase.split(' ')
    return palavras.length
}

console.log(contaFrases())

/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
minúsculas.
*/

const howWords = (char, str, num) =>{
    return [...str].filter(caractere => caractere === char).length
}

console.log(howWords('a', 'Eu amo programacao', 4))


const geraNumero = ()=>{
    const gerador = Math.floor(Math.random()*9)
    return  gerador
    
}

console.log(geraNumero())

/*A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
 */

const strings = ['sabia', 'sabiá', 'soube', 'saber', 'sei', 'sabedoria', 'laranjeira']

const buscaFor = (inicio)=>{
    return strings.filter(palavra => palavra.includes(inicio))
}
console.log(buscaFor('l'))

/*Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais. */



const saySomething = (frase) =>{
    const vogal = ['a', 'A', 'e','E', 'i','I', 'o','O', 'u', 'U']
    vogal.forEach(vogais => frase=  frase.replace(vogais, '#'))
    return frase
}
console.log(saySomething('adoro programar'))

/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a
seguir: */

const obj5 = {a:10, b: 20, c:30}
const inverter = ()=>{
    const inverterObjetos = Object.entries(obj5).map(parChaveValor => parChaveValor.reverse())
    return Object.fromEntries(inverterObjetos)
}
console.log(inverter())


/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
*/



/*Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
 */




/*Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num
array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com
Resoluções - Exercícios - Curso Fundamentos de Programação 15
os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas. */