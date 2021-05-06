/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um
 número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da 
 multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o 
 mesmo da primeira se e somente se o valor do elemento for maior que 5. */


 
 // Com Map e Filter

 const multVetor = (vet, num) => { return  newVet = vet.map(e => e * num)}
 const multVetMaior5 = (vet, num) => { return newVet = vet.filter(e => e > 5).map(e => e * num)}

 console.log('Com map = ', multVetor([1, 2, 3, 4, 5], 3))
 console.log('Com filter e map = ', multVetMaior5([1, 4, 5, 6, 7, 8, 10, 0], 5))



 // Sem Map e sem Filter

 const multVetor2 = (vet, num) => {
    let newVet = []

    for (let i in vet) {
        newVet[i] = vet[i] * num
    }
    return newVet
}

const multVetMaior5b = (vet, num) => {
    let newVet = vet.filter(e => e > 5)

    for (let i in newVet) {
        newVet[i] = newVet[i] * num
    }
    return newVet
}

console.log('\nSem map e sem filter = ', multVetor2([1, 2, 3, 4, 5], 3))
console.log('Sem map e sem filter = ', multVetMaior5b([1, 4, 5, 6, 7, 8, 10, 0], 5))