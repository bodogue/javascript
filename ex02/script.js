function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.querySelector('#Inasc')
    var res = document.querySelector('#display')
    var nasc = document.querySelector('#Inasc')
    
    if (nasc.value.length == 0 || nasc.value > ano) {
        alert('[ERRO] Data inválida! Tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade <= 10) {
                //crianca
                img.setAttribute('src', 'imagens/m-crianca.jpeg')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'imagens/m-jovem.jpeg')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'imagens/m-adulto.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/m-idoso.jpeg')
            }
        } else {
            genero = 'Mulher'
            if (idade <= 10) {
                //crianca
                img.setAttribute('src', 'imagens/f-crianca.jpeg')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'imagens/f-jovem.jpeg')
            } else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'imagens/f-adulto.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/f-idoso.jpeg')
            }
        }
        res.innerHTML = `Detectamos  ${genero} de ${idade} anos`
        res.appendChild(img)
        
    }
}