const avo = {att1: 'gago'}
const pai = {__proto__: avo, att2: 'careca'}
const filho = {__proto__: pai, att3:'falador'}
console.log(filho.att1, filho.att3)

const carro = {
    velAtual: 0,
    velMax : 250,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const gol = {
    modelo: 'Bolinha',
    velMax: 190
}

const toyota = {
    modelo : 'Tkdf',
    status(){
        return `${this.modelo}: ${super.status()}`
    }

}

Object.setPrototypeOf(gol, carro)
Object.setPrototypeOf(toyota, carro)

console.log(gol)
console.log(toyota)

toyota.acelerar(100)
toyota.acelerar(100)
toyota.acelerar(100)
console.log(toyota.status())

gol.acelerar(250)
console.log(gol.status())
