let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
var valores = []
function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function add() {
    if(isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.innerHTML = `Valor ${num.value} Adicionado`
        lista.appendChild(opt)
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou ja encrontrado na lista')
    }
    num.value = ''
    num.focus()
}
function fin() {
    if (valores.length == 0) {
        alert('Adicione valores..')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if(valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        let media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O MAIOR valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O MENOR valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A SOMA dos valores e ${soma}.</p>`
        res.innerHTML += `<p>A MEDIA dos valores e ${media}.</p>`
    }
}