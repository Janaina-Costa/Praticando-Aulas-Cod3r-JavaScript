 const sequencia = {
     _valor: 1,
     get valor() { return this._valor++},
     set valor(valor){
         if(valor>this._valor){
             this._valor = valor
         }
     }
 }
 console.log(sequencia.valor, sequencia.valor, sequencia.valor)
 sequencia.valor = 999
 console.log(sequencia.valor, sequencia.valor, sequencia.valor)
 sequencia.valor= 12 // vai ignorar pq é menor que o valor da sequencia anterior
 console.log(sequencia.valor)