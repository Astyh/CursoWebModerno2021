// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const contaImpPar = (vetor) => {
    let contImp = 0
    let contPar = 0
    vetor.forEach(element => { element % 2 != 0 ? contImp++ : contPar++});
    console.log(`Pares: ${contPar} -- Impares : ${contImp}`)
}

contaImpPar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
contaImpPar([0,1,3])
contaImpPar([10,20,23])
contaImpPar([-33,-9,-4])