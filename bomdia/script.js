function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('bola')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${min}:${seg}`
    if (hora > 6 && hora < 12) {
        //bom dia
        img.src = 'imagens/dia.png'
        document.body.style.background = '#80d5f1'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#f3ab70ff'
    } else if (hora >= 18 || hora < 6) {
        //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#3c4881ff'
    }
    setInterval(carregar, 1000)
}