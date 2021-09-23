const alunos = [
    {nome:'janaina', nota:10},
    {nome:'Alexander', nota:9.9}
]

//Imperativo
let total1 = 0

for(let i=0; i<alunos.length;i++){
    total1 += alunos[i].nota
}

console.log(total1/alunos.length)

//Declarativo

const getNota = aluno => aluno.nota
const soma = (acumulador, nota) => acumulador + nota

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)