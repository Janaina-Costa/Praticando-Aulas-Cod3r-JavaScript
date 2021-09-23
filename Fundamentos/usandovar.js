for(var i= 0; i<=5;i++){
    console.log(i)
}
console.log(i)//vai aparecer pois var não tem escopo de bloco

for(let j=0; j<=5;j++){
    console.log(j)
}
console.log(j) //da erro de variavel não declarada pois let tem ecopo de bloco

