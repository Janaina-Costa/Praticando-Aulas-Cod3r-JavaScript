let nome = 'Ragat3nga'
console.log(nome.charAt(0))
console.log(nome.charCodeAt(3))
console.log(nome.indexOf('g'))

console.log(nome.substring(3))
console.log(nome.substring(2, 6))

console.log('Ja dancei muito '.concat(nome).concat(' !! rsrsr'))
console.log(nome.replace("a",'4'))
console.log(nome.replace(/\d/,4))

console.log('Pé, mão, joelho, cotovelo'.split(','))

const cxalta = texto => texto.toUpperCase()
console.log(`Ei ... ${cxalta('presta atenção cara')}!`)
