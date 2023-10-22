var fundo = document.getElementsByTagName('body')[0]
var dia = document.querySelector('#dia')
var tarde = document.querySelector('#tarde')
var noite = document.querySelector('#noite')
var display = document.querySelector('#display')
var h1Data = document.querySelector('#h1data')
var h1Sem = document.querySelector('#h1Sem')
var desejo = document.querySelector('#desejo')
var data = new Date()
var agoraHor = data.getHours()
var agoraMin = data.getMinutes()
var agoraDia = data.getDate()
var agoraDiaSem = data.getDay()
var agoraMes = data.getMonth()
var agoraAno = data.getFullYear()
switch (agoraMes) {
    case 1:
        agoraMes = 'Janeiro'
        break
    case 2:
        agoraMes = 'Fevereiro'
        break
    case 3:
        agoraMes = 'Março'
        break
    case 4:
        agoraMes = 'Abril'
        break
    case 5:
        agoraMes = 'Maio'
        break
    case 6:
        agoraMes = 'Junho'
        break
    case 7:
        agoraMes = 'Julho'
        break
    case 8:
        agoraMes = 'Agosto'
        break
    case 9:
        agoraMes = 'Setembro'
        break
    case 10:
        agoraMes = 'Outubro'
        break
    case 11:
        agoraMes = 'Novembro'
        break
    case 12:
        agoraMes = 'Dezembro'
}
switch (agoraDiaSem) {
    case 0:
        agoraDiaSem = 'Domingo'
        break
    case 1:
        agoraDiaSem = 'Segunda-feira'
        break
    case 2:
        agoraDiaSem = 'Terça-feira'
        break
    case 3:
        agoraDiaSem = 'Quarta-feira'
        break
    case 4:
        agoraDiaSem = 'Quinta-feira'
        break
    case 5:
        agoraDiaSem = 'Sexta-feira'
        break
    default:
        agoraDiaSem = 'Sábado'
}
h1Sem.innerHTML = `${agoraDiaSem}`
h1Data.innerHTML = `${agoraDia} de ${agoraMes} de ${agoraAno}`
if (agoraHor < 12) { // DIA
    if (agoraMin < 10) {
        display.innerHTML = `<strong>${agoraHor}:0${agoraMin}</strong>`
    } else {
        display.innerHTML = `<strong>${agoraHor}:${agoraMin}</strong>`
    }
    display.style.backgroundColor = '#D0D631'
    desejo.innerHTML = '. Bom dia!'
    dia.style.display = 'block'
    fundo.style.backgroundColor = '#D0D631'
} else if (agoraHor < 18) { // TARDE
    if (agoraMin < 10) {
        display.innerHTML = `<strong>${agoraHor}:0${agoraMin}</strong>`
    } else {
        display.innerHTML = `<strong>${agoraHor}:${agoraMin}</strong>`
    }
    display.style.backgroundColor = '#D1A872'
    desejo.innerHTML = '. Boa tarde!'
    tarde.style.display = 'block'
    fundo.style.backgroundColor = '#D1A872'
} else { // NOITE
    if (agoraMin < 10) {
        display.innerHTML = `<strong>${agoraHor}:0${agoraMin}</strong>`
    } else {
        display.innerHTML = `<strong>${agoraHor}:${agoraMin}</strong>`
    }
    display.style.backgroundColor = '#70616C'
    desejo.innerHTML = '. Boa noite!'
    noite.style.display = 'block'
    fundo.style.backgroundColor = '#70616C'
}