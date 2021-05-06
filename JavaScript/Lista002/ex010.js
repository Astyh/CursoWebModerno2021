/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++" */

const simboloMais = (num) => { 
    let text = ''
    for (let i = 0; i < num; i++) {
        text += '+'
    }
    return text
}

console.log(simboloMais(2)) // retornará "++"
console.log(simboloMais(4)) // retornará "++++"