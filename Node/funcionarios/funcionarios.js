const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const pegarGenero = sexo => sexo.genero === 'F'
const pegarnacionalidades = nacionalidade => nacionalidade.pais === 'China'
const menorSalario = (funcionario, funcionarioAtual)=>{
    return funcionario.salario < funcionarioAtual.salario?funcionario: funcionarioAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data//axios transforma json automaticamente em ojeto
 
    
    const funcionario = funcionarios.filter(pegarnacionalidades).filter(pegarGenero).reduce(menorSalario)

    console.log(funcionario)
    

    

})

