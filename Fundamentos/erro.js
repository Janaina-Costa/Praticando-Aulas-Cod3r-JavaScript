function tratarErroELancar(erro){
    //throw new Error('Erro de processamento'), ou
    //throw 10, ou
    //throw new Error(true), ou
    throw{nome:erro.name,
        msg:erro.message,
        date: new Date
    }
}

function imprimiNomeGritando(obj){
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarErroELancar(e)
    }finally{
        console.log('Final')
    }
}

const obj = {nome:'Janaina'} //o erro esta na chave nome, difere de name da função
imprimiNomeGritando(obj)