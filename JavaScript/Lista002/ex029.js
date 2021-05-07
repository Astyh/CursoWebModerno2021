/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6 */


function segundoMaior(array) {
    const novoArray = Object.assign([], array)
    novoArray.sort((a, b) => b - a)

    return novoArray[1]
}


console.log(segundoMaior([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6 


// Teste para ver se o array original está sendo modificado
const numero = [12, 16, 1, 5]
console.log('------ Array Original Não é modificado !! -------------')
console.log(segundoMaior(numero))
console.log(numero)