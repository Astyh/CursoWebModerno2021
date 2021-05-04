/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos
 há nesse vetor e imprime a quantidade no console. */

const qtdNegativo = (vet, qtd = 0) => { vet.forEach(element => { element < 0 ? qtd++ : qtd + 0 }); return qtd }

const num = [1, 2, -3, -6, 0, 3, -3, 0, -12]

console.log(qtdNegativo(num))