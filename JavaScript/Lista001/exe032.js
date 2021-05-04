//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const media = (vet) => {
    let qtdElementos = 0
    let soma = 0

    vet.forEach(element => {(soma += element, qtdElementos++)})

    return console.log(`Media dos elementos do vetor = ${soma/qtdElementos}`)
}

const num = [6, 8, 5, 3, 7, 4, 6, 5, 2, 4]

media(num)