/**17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

function planoAumento(escala){
    switch(escala){
        case 'A': return  0.1
        case 'B': return 0.15
        case 'C': return  0.2
        default: return 'Plano inválido'

    }
}

function novoSalario(escala,salario){
    return (salario + (salario * planoAumento(escala))).toFixed(2).replace('.', ',')
}

console.log(`R$ ${novoSalario('A', 2899.20)}`)