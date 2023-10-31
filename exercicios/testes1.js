var num = []
for(let a = 1; a <= 5; a++) {
    num.push(a)
}
// FORMA TRADICIONAL
console.log('FORMA TRADICIONAL')
for(let c = 0; c < num.length; c++) {
    console.log(num[c])
}
// FORMA SIMPLIFICADA
console.log('---------------------' )
console.log('FORMA SIMPLIFICADA')
for(let pos in num) {
    console.log(num[pos])
}
console.log('---------------------' )
console.log('TESTES COM "indexOf()"')
let procurar0 = num.indexOf(4)
console.log(` Procurando um numero existente, mostra a chave/indice do valor procurado. Nesse caso procurei o valor 4 e o programa me retorna: ${procurar0}`)
console.log('===' )
let procurar1 = num.indexOf(8)
console.log(` Procurando um numero inexistente, mostra -1. Nesse caso, procurei o valor 8 e o programa me retorna: ${procurar1}`)