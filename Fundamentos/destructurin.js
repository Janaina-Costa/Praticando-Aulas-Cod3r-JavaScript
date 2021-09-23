//destruturyn objeto
const andar={
    nome: 'janaina',
    idade: 39,
    profissao:'desenvolvedora'
}

const { nome, idade } = andar
console.log(nome, idade)

//destructuting array
const [n1,n2,n3,n4]=[10,7,8,2]
console.log(n1)

const [a, b, c, d]=[2, 7, 8, 12]
const soma = a+b+c+d
const multip = d*a*c
console.log(soma)
console.log(multip)


