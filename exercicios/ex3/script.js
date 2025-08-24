var dado = document.getElementById('dado')
var numero = document.getElementById('numero')
var sortear = document.getElementById('sorteio')

function D4() {
    dado.src = 'imagens/d4.png'
    var n = 4;
}

function D6() {
    dado.src = 'imagens/d6.png'
    var n = 6;
}

function D8() {
    dado.src = 'imagens/d8.png'
    var n = 8;
}

function D10() {
    dado.src = 'imagens/d4.png'
    var n = 10;
}

function D12() {
    dado.src = 'imagens/d4.png'
    var n = 12;
}

function D20() {
    dado.src = 'imagens/d4.png'
    var n = 20;
}

function D100() {
    dado.src = 'imagens/d4.png'
    var n = 100;
}

function sortearNumero(max) {
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;

}
var numeroSorteado = sortearNumero(n);
numero.innerText(numero)


