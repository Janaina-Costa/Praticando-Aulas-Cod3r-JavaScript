let then = new Date(1981,9,28)
console.log(then)

let later = new Date(2021, 0, 1, 17, 10, 30)
console.log(later)

let now = new Date()
console.log(now)

let lapsoTemp = now - then
console.log(lapsoTemp)

let data = new Date(1256664016016)
console.log(data)

console.log(later.getFullYear())
console.log(later.getMonth())
console.log(later.getUTCHours())
console.log(later.toString())
console.log(later.toUTCString())