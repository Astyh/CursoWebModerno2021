/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes 
vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com 
strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir 
os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão 
aparecer no console.*/

const vetorInteiro = [2, 4, 6, 8]
const vetorString = ['1', '3', '5', '7']
const vetorDouble = [2.1 , 4.3, 6.5, 8.7]

console.log(vetorInteiro.concat(vetorString).concat(vetorDouble))
console.log(vetorString.concat(vetorDouble).concat(vetorInteiro))