let temperatura = 30
let resultado = ""

if (temperatura < 0) {
    resultado = "Alaska"
} else if (temperatura < 10) {
    resultado = "Rio Grande do Sul"
} else if (temperatura < 20) {
    resultado = "Londrina"
} else if (temperatura < 30) {
    resultado = "Minas Gerais"
}  else if (temperatura < 40) {
    resultado = "Bahia"
}

console.log(`A temperatura é ${temperatura} o resultado é ${resultado}`)