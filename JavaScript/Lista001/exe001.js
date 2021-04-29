// 01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.

const operacoesValores = (num1, num2) => {
    console.log(`Soma = ${(num1 + num2).toFixed(2)} ---- Subtração = ${(num1 - num2).toFixed(2)} ---- Multiplicação = ${(num1 * num2).toFixed(2)} ---- Divisão = ${(num1 / num2).toFixed(2)}`)
}

operacoesValores(2,3)
operacoesValores(30,3)
operacoesValores(2.4,2)
operacoesValores(1.5,2.4)