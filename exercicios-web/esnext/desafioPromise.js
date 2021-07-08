const fs = require('fs')
const path = require('path')

function exibirConteudo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const os = require('os')
const caminho = path.join(__dirname, 'dados.txt')

exibirConteudo(caminho)
    .then(conteudo => conteudo.split(os.EOL))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)