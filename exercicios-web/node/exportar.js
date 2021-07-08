console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste' // Não pode fazer desse modo
}

console.log(module.exports)

module.exports = { publico: true } // Sempre que precisar atribuir um novo objeto para ser exportado, usar dessa forma não a outra.

// se quiser um objeto que já foi criado pode ser igual as formas anteriores