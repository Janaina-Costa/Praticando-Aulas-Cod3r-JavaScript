//factory  retorna uma nova instancia
module.exports =()=>{
    return{
        valor:1,
        increm(){
            this.valor++
        }
    }
}