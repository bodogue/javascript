function gerar() {
    var num = document.querySelector('#num')
    var res = document.querySelector('#res')
    var s = 0
    var n = Number(num.value)
    res.innerHTML = ''
    if (num.value.length == 0) {
        alert('Por favor, digite um valor.')
    } else {
        for (var c = 1; c <= 10; c ++) {
            s = c * n
            if (c - 10) {
                res.innerHTML += `${n} x ${c} = ${s} <br>`
            } else {
                res.innerHTML += `${n} x ${c} = ${s} <br>`
            }
        }
    }
}