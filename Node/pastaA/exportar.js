console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 2
exports.b = 5
module.exports.c = 6

exports = null
console.log(module.exports)