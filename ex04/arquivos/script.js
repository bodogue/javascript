function gerar() {
    var num = document.querySelector('#num')
    var tab = document.querySelector('#tab')
    if (num.value.length == 0) {
        alert('Por favor, digite um valor.')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text += `${n} x ${c} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}