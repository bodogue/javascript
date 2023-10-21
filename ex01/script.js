var fundo = document.getElementsByTagName('body')[0]
var dia = document.querySelector('#dia')
var tarde = document.querySelector('#tarde')
var noite = document.querySelector('#noite')
var display = document.querySelector('#display')
var hora = new Date()
var agora = hora.getHours()
if (agora < 12) { // DIA
    display.innerHTML = `Agora são <strong>${agora} horas</strong>. Bom dia!`
    dia.style.display = 'block'
    fundo.style.backgroundColor = '#D0D631'
} else if (agora < 18) { // TARDE
    display.innerHTML = `Agora são <strong>${agora} horas</strong>. Boa tarde!`
    tarde.style.display = 'block'
    fundo.style.backgroundColor = '#D1A872'
} else { // NOITE
    display.innerHTML = `Agora são <strong>${agora} horas</strong>. Boa noite!`
    noite.style.display = 'block'
    fundo.style.backgroundColor = '#70616C'
}