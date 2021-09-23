const pessoa = {nome:'joe'}
 pessoa.nome = 'john'
 console.log(pessoa)
 pessoa.nome= 'jossé'
 console.log(pessoa)
 Object.freeze(pessoa)

 pessoa.nome= 'telma'
 console.log(pessoa)