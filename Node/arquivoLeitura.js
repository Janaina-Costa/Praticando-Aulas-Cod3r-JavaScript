const fs = require('fs')//modulo fs já vem previamente instalado no node

const caminho = __dirname + '/arquivo.json'


//leitura sincrona..(não muito interessante parta arquivos grandes)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)  

//leitura assincrona(maisn recomendada, vai testando enquanto le o conteudo)

fs.readFile(caminho,'utf-8', (erro, conteudo)=>{
    const config =JSON.parse (conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

//leitura direto com require
const config = require('./arquivo.json')
console.log(config.db.port)

//leitura de diretorio com teste durante a leitura
fs.readdir(__dirname, (erro, arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
    console.log(arquivos[0].length)
})