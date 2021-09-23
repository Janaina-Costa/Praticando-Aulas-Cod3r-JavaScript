/**04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
 */
function divisao(x,y){
    if(y === 0){
        console.log('Divisão impossivel')
    }else{
        console.log( (x / y).toFixed(2))
        console.log( x % y )
    }
}
divisao(10,3)
