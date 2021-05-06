/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60 */


const somarNumeros = (array) => { return array.reduce((total = 0, elemento) => total + elemento) }

console.log(somarNumeros([10, 10, 10]))  // retornará 30
console.log(somarNumeros([15, 15, 15, 15]))  // retornará 60 