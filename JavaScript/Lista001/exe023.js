/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média 
ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 
3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a 
média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que 
o código lido seja negativo.
*/

const mediaPonderada = (codAluno, vet) => {

    let media = ((vet[0] * 4) + (vet[1] * 3) + (vet[2] * 3)) / 10
    let msg = media >= 5 ? 'APROVADO' : 'REPROVADO'

    console.log(`Aluno Codigo : ${codAluno}`)
    console.log(`Nota 1: ${vet[0]} Nota 2: ${vet[1]} Nota 3: ${vet[2]}`)
    console.log(`Media: ${media}   ${msg}\n`)
}

mediaPonderada(444, [10, 10, 9])
mediaPonderada(444, [10, 8, 8])
mediaPonderada(444, [9, 10, 10])
mediaPonderada(444, [8, 2, 3])
mediaPonderada(444, [8, 2, 4])