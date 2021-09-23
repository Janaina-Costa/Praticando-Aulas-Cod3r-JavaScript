let isAtivo = 1
console.log(!!isAtivo)

//tipos que se comportam como verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

//tipos que se comportam como falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!(1 ||''||0)||NaN)
