/**18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */



function writeExtenso(num){
    switch(num){
        case 0 : return 'zero'.toUpperCase()
        case 1 : return 'um'.toUpperCase()
        case 2 : return 'dois'.toUpperCase()
        case 3 : return 'três'.toUpperCase()
        case 4 : return 'quatro'.toUpperCase()
        case 5 : return 'cinco'.toUpperCase()
        case 6 : return 'seis'.toUpperCase()
        case 7 : return 'sete'.toUpperCase()
        case 8 : return 'oito'.toUpperCase()
        case 9 : return 'nove'.toUpperCase()
        case 10 : return 'dez'.toUpperCase()
        default: return 'Número fora do intervalo'

    }
    
}
console.log(`${writeExtenso(11)}`)