const contadorA = require('./instanciaUnica')
const contadorB = require( './instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//a instancia unica será igual para todos que a requererem
contadorA.increm()
contadorA.increm()
console.log(contadorB.valor, contadorA.valor)
contadorB.increm()

console.log(contadorB.valor, contadorA.valor)
//a nova instancia feita o factory gera um cache diiferente para cada um que requerer
contadorC.increm()
contadorC.increm()
contadorD.increm()


console.log(contadorC.valor, contadorD.valor)