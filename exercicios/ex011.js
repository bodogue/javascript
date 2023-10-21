var idade = 17
if (idade < 16) {
    console.log(`Voçê tem ${idade} anos, ainda não pode votar.`)
} else if (idade < 18 || idade >= 65) {
    console.log(`Voçê tem ${idade} anos, não é necessário votar`)
} else {
    console.log(`Voçê tem ${idade} anos, seu voto é obrigatório`)
}
