/**08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */
let listaPonto = '0, 25, 3, 89, 12'

function comparaPontuacao(listaPonto){
    let pontuacao = listaPonto.split(", ")
    let maiorPontuacao = pontuacao[0] 
    let menorPontuacao = pontuacao[0]
    let qtdQuebraDeRecords = 0
    let piorJogo = 1

    for(let i= 0; i < pontuacao.length; i++){
        if(pontuacao[i] >maiorPontuacao){
            maiorPontuacao = pontuacao[i]
            qtdQuebraDeRecords++
        }   
        if(pontuacao[i] < menorPontuacao){
            menorPontuacao = pontuacao[i]
            piorJogo = i+1
        }

    }   
    return [qtdQuebraDeRecords, piorJogo] 

}
console.log(comparaPontuacao(listaPonto))

