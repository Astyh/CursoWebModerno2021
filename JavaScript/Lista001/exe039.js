/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo 
que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim
sucessivamente. Faça a troca sem utilizar uma variável auxiliar. */

const trocaVetor = (vetA, vetB) => { 
    console.log(`Vetor A e B ANTES da troca A = [${vetA}] e B = [${vetB}]`)
    
    vetA ? [vetA, vetB] = [vetB, vetA] : [vetA, vetB] = [vetB, vetA]

    console.log(`Vetor A e B DEPOIS da troca A = [${vetA}] e B = [${vetB}]\n`)
}

trocaVetor([1, 3, 5, 7], [2, 4, 6, 8])

trocaVetor([1, 3], [2, 4, 16, 18])