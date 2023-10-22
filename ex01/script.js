var fundo = document.getElementsByTagName('body')[0]
var dia = document.querySelector('#dia')
var tarde = document.querySelector('#tarde')
var noite = document.querySelector('#noite')
var display = document.querySelector('#display')
var data = new Date()
var agoraHor = data.getHours()
var agoraMin = data.getMinutes()
var agoraDia = data.getDay()
var agoraMes = data.getMonth()
if (agoraHor < 12) { // DIA
    display.innerHTML = `Agora são <strong>${agoraHor}:${agoraMin}</strong>. Bom dia!`
    dia.style.display = 'block'
    fundo.style.backgroundColor = '#D0D631'
} else if (agoraHor < 18) { // TARDE
    display.innerHTML = `Agora são <strong>${agoraHor}:${agoraMin}</strong>. Boa tarde!`
    tarde.style.display = 'block'
    fundo.style.backgroundColor = '#D1A872'
} else { // NOITE
    display.innerHTML = `Agora são <strong>${agoraHor}:${agoraMin}</strong>. Boa noite!`
    noite.style.display = 'block'
    fundo.style.backgroundColor = '#70616C'
}