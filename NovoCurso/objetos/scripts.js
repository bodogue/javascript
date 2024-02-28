//objeto
var obj = {
    nome: 'fulano',
    idade: 20,
    sexo: 'Masc',
    profissao: 'Programador',
    estaTrabalhando: false,
}

console.log(obj)
console.log(typeof obj)

//Acessar propriedades do objeto
console.log(obj.nome)
console.log(obj.idade)
console.log('Meu nome e ' + obj.nome)

//Modificar propriedades do objeto
obj.nome = 'sicrano'
console.log(obj.nome)
console.log(obj)

//Adicionar propriedades ao objeto
obj.salario = '3200'
console.log(obj.salario)
console.log(obj)