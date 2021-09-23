const moduloA = require('../../ModuloNode/moduloA')
console.log(moduloA.ola)

const http = require('http')
http.createServer((req, res)=>{
    res.write('Bom dia!!!')
    res.end()
}).listen(8080)