
function calcular() {
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    
    res.innerHTML = "Contando: " // limpa antes de começar

    for(var i = n1; i<n2; i+=passo){
        res.innerHTML +=`${i} `
    }
}