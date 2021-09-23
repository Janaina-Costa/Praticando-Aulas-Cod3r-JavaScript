//implementando for each = criando um forEach na mao
Array.prototype.forEach2= function (calbak){
    for(let indice = 0; indice<this.length;indice++){
        calbak(this[indice], indice, this)
    }
}


const aprovados = ['Josenildo', 'Jacinto', 'Maria', 'Severina']

aprovados.forEach2((nome, indice)=>{console.log(`${indice}~) ${nome}`)})
aprovados.forEach2((nome)=>console.log(nome.toUpperCase(nome)))