let nome = "André"


if (nome == "André") {
    exibirSaudacao("André")
} else if (nome == "Victor") {
    exibirSaudacao("Victor")
} else if (nome == "Felipe") {
    exibirSaudacao("Felipe")
}

//  ----------------------------

function exibirSaudacao(nome) {
    console.log("Seja bem-vindo(a), " + nome)
}

function somarDoisNumeros(num1, num2) {
    return num1 + num2
}

let resultado = somarDoisNumeros(10, 10)

// ------------------------------

let peso = 70
let altura = 1.69
let imc = calcularIMC(peso, altura)
let classificacao = classificarIMC(imc)

function calcularIMC(peso, altura) {
    return peso / altura **2
}

function classificarIMC(imc) {
    if (imc <= 18.5){
        return "Abaixo do peso!"
    } else if (imc <= 24.9) {
        return "Peso nromal!"
    }  else if (imc <= 29.9) {
        return "Sobre Peso!"
    } else if (imc <= 34.9) {
        return "Obesidade Grau I!"
    } else if (imc <= 39.9) {
        return "Obesidade Grau II!"
    } else {
        return "Obesidade Grau III!"
    } 
}

console.log(`O valor do seu IMC é ${imc.toFixed(2)} e a classificação é ${classificacao}`)

    
