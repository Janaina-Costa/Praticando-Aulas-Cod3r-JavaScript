//1º ex
const a = 1
const b = 2
const c = 3

const obj1 = {a, b, c}
console.log(obj1)

//2º ex
const nomeAtributo = 'nota'
const valorAtributo = 8.9
const obj2 = {[nomeAtributo] : valorAtributo}
console.log(obj2)


//3º ex
const obj3 = {
    funcao1(a){
        return 'ola ' + a + ', seja bem vindo(a)!'
    }

}
const sayHello = obj3.funcao1('Luvique')
console.log(sayHello)
console.log(obj3.funcao1('janaina'))




