function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max-min)+min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != 2){
    opcao = getInteiroAleatorio(0, 10)
    console.log('Opção escolhida foi: '+opcao)
}
console.log('Ate a próxima')

let escolha

do {
    escolha = getInteiroAleatorio(0,8)
    console.log(`Numero escolhido: ${escolha}`)
} while (escolha != 5);
console.log('Bye bye')