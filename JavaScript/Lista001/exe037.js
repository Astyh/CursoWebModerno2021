/* 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que
 recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e
  escreva os n termos , bem como a soma dos elementos. */

function progArit(n, a1, razao) {

    var recebArit = [a1]
    var soma = a1

    for (let i = 0; i < n - 1; i++) {

        recebArit[i + 1] = recebArit[i] + razao
        soma += recebArit[i + 1]
    }

    return [recebArit, soma]
}

function progGeome(n, a1, razao) {

    var recebArit = [a1]
    var soma = a1

    for (let i = 0; i < n - 1; i++) {

        recebArit[i + 1] = recebArit[i] * razao
        soma += recebArit[i + 1]
    }

    return [recebArit, soma]
}

var aritmetica = progArit(10, 13, 2)
console.log(aritmetica)

var gemetrica = progGeome(10, 13, 2)
console.log(gemetrica)