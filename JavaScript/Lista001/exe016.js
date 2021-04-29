// 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.

const calculadora = (valor1, sinal, valor2) => {
    switch(sinal) {
        case '+':
            console.log(`${valor1} ${sinal} ${valor2} = ${(valor1 + valor2).toFixed(2)}`)
            break
        case '-':
            console.log(`${valor1} ${sinal} ${valor2} = ${(valor1 - valor2).toFixed(2)}`)
            break
        case '*':
            console.log(`${valor1} ${sinal} ${valor2} = ${(valor1 * valor2).toFixed(2)}`)
            break
        case '/':
            console.log(`${valor1} ${sinal} ${valor2} = ${(valor1 / valor2).toFixed(2)}`)
            break
        default:
            console.log('Operação Inválida!')
    }
}

calculadora(4,'+',2)
calculadora(4,'-',2)
calculadora(4,'*',2)
calculadora(4,'/',2)
calculadora(2,'/',4)
calculadora(4,'@',2)
calculadora(4,'b',2)
calculadora(4,'2',2)