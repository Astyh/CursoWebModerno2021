/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
 */

const cumprimentar = (text) => { console.log('Olá, '.concat(text, '!')) }
const cumprimentar2 = (text) => { console.log(`Olá, ${text}!`) }

cumprimentar("Leonardo")
cumprimentar2("Maria")