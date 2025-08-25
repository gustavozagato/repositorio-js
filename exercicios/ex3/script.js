var dado = document.getElementById('dado')
var numero = document.getElementById('numero')
let nmax = 4;

function sortearNumero(max) {
    return Math.floor(Math.random() * max) + 1;

}

function D4() {
    dado.src = 'imagens/d4.png'
    nmax = 4;
}

function D6() {
    dado.src = 'imagens/d6.png'
    nmax = 6;
}

function D8() {
    dado.src = 'imagens/d8.png'
    nmax = 8;
}

function D10() {
    dado.src = 'imagens/d10.png'
    nmax = 10;
}

function D12() {
    dado.src = 'imagens/d12.png'
    nmax = 12;
}

function D20() {
    dado.src = 'imagens/d20.png'
    nmax = 20;
}

function D100() {
    dado.src = 'imagens/d100.png'
    nmax = 100;
}

function resultado() {
    let numeroSorteado = sortearNumero(nmax);
    numero.innerText = numeroSorteado;
}


