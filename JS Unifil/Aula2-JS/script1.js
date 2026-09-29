let pontos = Number(prompt("Digite seus pontos: "))
let tempo  = Number(prompt("Digite seu tempo na casa em anos: "))
let resultado = ""

if (pontos < 100 || tempo <= 1) {
    resultado = "Bronze"
} else if (pontos < 500 || tempo <= 2 ) {
    resultado = "Prata"
} else if (pontos < 1000 || tempo <= 3 ) {
    resultado = "Ouro"
} else {
    resultado = "Diamante"
}

console.log(resultado)

