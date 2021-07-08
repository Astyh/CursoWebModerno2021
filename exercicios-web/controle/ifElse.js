const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // Como a JS é fracamente tipada tem que tomar cuidado com as coisas passadas dentro porque mesmo recebendo uma String ele não dá erro e sim retorna false-"Reprovado"