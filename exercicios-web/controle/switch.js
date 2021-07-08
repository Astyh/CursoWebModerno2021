const imprimirResultado = function (nota) {
    // Alguns CASE retornam a mesma mensagem então não precisa colocar linhas neles por que vai descer para o debaixo
    switch (Math.floor(nota)) { 
        case 10:   // Como não tem nada se for 10 ele vai olhar pro debaixo o case 9
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7: // Seria igual o primeiro mas colocando um do lado do outro
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
imprimirResultado('10')
imprimirResultado('doido') // Uia funciona na String mas acho que não seria o melhor jeito, estou só testando, não foi exemplo do professor