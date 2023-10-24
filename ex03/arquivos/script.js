function Contar() {
    let ini = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let pas = document.querySelector('#passo')
    let res = document.querySelector('#res')
    res.innerHTML = ''
    if (inicio.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = '[ERRO] Faltam dados!'
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            alert('[ERRO] Passo invalido! Considerando PASSO 1.')
            p = 1
        } 
        if (p > 0) {
            if (i == f) {
                if (p <= i) {
                    res.innerHTML = '1'
                } else {
                    res.innerHTML = '[ERRO] Impossivel calcular. Tente novamente'
                }
            } else {
                if (i < f) {
                    if (p > f - i) {
                        res.innerHTML = '[ERRO] Impossivel calcular. Tente novamente'
                    } else {
                        for (let c = i; c <= f; c += p) {
                            res.innerHTML += `${c} \u{1F449} `
                        }
                    }
                } else {
                    if (p > i - f) {
                        res.innerHTML = '[ERRO] Impossivel calcular. Tente novamente'
                    } else {
                        for (let c = i; c >= f; c -= p) {
                            res.innerHTML += `${c} \u{1F449} `
                        }
                    }
                }
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}