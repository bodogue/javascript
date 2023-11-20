let amigo = {nome:'jose', sexo:'M', peso:60, idade:27,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}


amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

let num = 8
num **= 2
console.log(num)