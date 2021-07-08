// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Da NaN   Not A Number
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // Só pega os 2 primeiros numeros
imprimirSoma()  // NaN

// Funcao com retorno
function soma(a, b = 1){   // b = 1, define um valor padrão quase não seja passado nenhum valor
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())  // Retorna Nan por que o parametro A n foi passado apesar de o B ser igual a 1