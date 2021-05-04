/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um
 número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da 
 multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o 
 mesmo da primeira se e somente se o valor do elemento for maior que 5. */

const multVetor = (vet, num) => {
    let newVet = []

    for (let i in vet) {
        newVet[i] = vet[i] * num
    }
    return newVet
}

const multVetMaior5 = (vet, num) => {
    let newVet = vet.filter(e => e > 5)

    for (let i in newVet) {
        newVet[i] = newVet[i] * num
    }
    return newVet
}

console.log(multVetor([1, 2, 3, 4, 5], 3))

console.log(multVetMaior5([1, 4, 5, 6, 7, 8, 10, 0], 5))