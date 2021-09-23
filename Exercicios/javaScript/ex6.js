/**06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jSimples = (c, i, t) =>{
   
    return `Montante = R$ ${(c*(1+i*t)).toFixed(2)}`
}

const jComposto = (c,i,t) =>{
    return `Montante = R$ ${(c*(1+i)**t).toFixed(2)}`
}
console.log(jSimples(4500, 0.04, 10))
console.log(jComposto(2000, 0.04, 4))