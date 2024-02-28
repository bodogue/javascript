var meuNome
meuNome = 'Fulano'
console.log(meuNome)
//
var numero = 5
var float = 5.1
var notANumber = NaN
var texto = 'hello'
var Null = null
var Undefined = undefined
var maisInf = +Infinity
var menosInf = -Infinity

console.log('O tipo de',numero,',',  float, ',',notANumber, ',',maisInf, ',',menosInf, 'é number')

console.log('O tipo de',Null, 'é', typeof Null)
console.log('O tipo de',Undefined, 'é', typeof Undefined)

console.log('var numero + var texto =', numero + texto, '(Isso se chama "Concatenar")') //Concatenar

// Hoisting
console.log(sobrenome)

var nome = null
var sobrenome

console.log(nome)
console.log(sobrenome)

nome = 'bambim'

console.log(nome)