const escola =[{
    nome:'T1',
    alunos:[{
        nome:'Pietro',
        nota:8
    },{
        nome:'Patricia',
        nota:7
    }]

},{
    nome:'T2',
    alunos:[{
        nome:'Carla',
        nota:9.4
    },{
        nome:'Julião',
        nota:6.5
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

const notaFlat =  escola.flatMap(getNotaTurma)

console.log(notaFlat)