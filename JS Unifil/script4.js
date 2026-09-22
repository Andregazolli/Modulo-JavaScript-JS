const planeta1 = "Marte"
const planeta2 = "Saturno"
const planeta3 = "Vênus"
let peso = 70
const coeficiente1 = 0.38
const coeficiente2 = 1.06
const coeficiente3 = 0.91
const pesoP1 = peso * coeficiente1
const pesoP2 = peso * coeficiente2
const pesoP3 = peso * coeficiente3
const frase1 = `Em ${planeta1} seu peso seria de ${pesoP1.toFixed(2)}kg.`
const frase2 = `Em ${planeta2} seu peso seria de ${pesoP2.toFixed(2)}kg.`
const frase3 = `Em ${planeta3} seu peso seria de ${pesoP3.toFixed(2)}kg.`

console.log(frase1)
console.log(frase2)
console.log(frase3)