const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
// const exibirAprovados = (aprovado) => console.log(aprovado)   mesma coisa aprovado é um parametro que está sendo recebido pela função mas está sendo um parametro só, não é obrigátorio o uso dos parenteses ()
aprovados.forEach(exibirAprovados)


// Primeiro parametro sempre é a Valor e o segundo a Chave (ou Conteudo e Indice) e o terceiro é o próprio array
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})