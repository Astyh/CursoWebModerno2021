/* 30) Escreva um algoritmo que percorre um vetor de inteiros 
e defina o maior e menor valor dentro do vetor. */

function defineMaiorMenor(vet) {
    let maiorVal = vet[0], menorVal = vet[0]

    for (let i in vet) {

        vet[i] > maiorVal ? maiorVal = vet[i] : maiorVal = maiorVal
        vet[i] < menorVal ? menorVal = vet[i] : menorVal = menorVal
    }

    console.log(`O maior valor dentro do vetor é: ${maiorVal} e o menor é: ${menorVal}`)
}

defineMaiorMenor([1, 3, 11, -2, 69, 33, 2, 4, 122])
defineMaiorMenor([1, 3, 11, 525, -2, 69, 33, 2, 4, 122, -64])
defineMaiorMenor([1433, 12, 33, 11, 22, 69, 33, 2, 4, 122])
defineMaiorMenor([0, 1, 3, 11, 2, 69, 33, 2, 4, 122, 32213])