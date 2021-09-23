const filhas = ['MAria', 'Josefiny']
const filhos = ['Alex', 'Filipe']

const todos = filhas.concat(filhos)

console.log(todos)
console.log(...filhas, ...filhos)

console.log([].concat([1,2], [3,4], 5, [[6,7]]))
