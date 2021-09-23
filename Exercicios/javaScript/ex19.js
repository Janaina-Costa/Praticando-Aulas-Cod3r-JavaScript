/**19) O cardápio de uma lanchonete é o seguinte:
 * 
Código  Descrição do Produto    Preço
100     Cachorro Quente         R$ 3,00
200     Hambúrguer Simples      R$ 4,00
300     Cheeseburguer           R$ 5,50
400     Bauru                   R$ 7,50
500     Refrigerante            R$ 3,50
600     Suco                    R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
 */

function cardapioCodigos(cod, num){
    switch(cod){
        case 100: return `Valor a Pagar R$ ${(num* 3.00).toFixed(2)}  \nLanche:  Cachorro quente`
        case 200: return `Valor a Pagar R$ ${(num* 4.00).toFixed(2)}  \nLanche :  Hambúrguer Simples`
        case 300: return `Valor a Pagar R$ ${(num* 5.50).toFixed(2)}  \nLanche:  Cheeseburguer`
        case 400: return `Valor a Pagar R$ ${(num* 7.50).toFixed(2)}\nLanche:  Bauru`
        case 500: return `Valor a Pagar R$ ${(num* 3.50).toFixed(2)} \nLanche:  Refrigerante`
        case 600: return `Valor a Pagar R$ ${(num* 2.80).toFixed(2)}  \nLanche:  Suco`
        default: return 'Produto inexistente'
        
    }
}

console.log(cardapioCodigos(6+.00, 2))