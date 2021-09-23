let contador = 1
while (contador<=5){
    console.log(`contando...${contador}`)
    contador++
}

for(let i = 1; i<=5; i++){
    console.log(`contando denovo ...${i}`)
}

const notas = [5.6,2.7,9.5,5.3]
for(i = 0; i< notas.length;i++){
    console.log(`Nota ${[i]} = ${notas[i]}`)
}

for(let i in notas){
    console.log(i)
}

const pessoa={
    nome:'janny',
    sobre : 'silva',
    idade : 36,
    peso : 120
}

for(let atributos in pessoa){
    console.log(`${atributos}: ${pessoa[atributos]}`)
}