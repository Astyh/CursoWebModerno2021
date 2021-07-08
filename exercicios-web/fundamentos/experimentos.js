// Fala sobre váriaveis locais e globais no Browser e no Node

let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports == this)
console.log(module.exports)

// Criando uma variavel maluca: sem var e let!
abc = 3  // NÃO FAÇA ISSO EM CASA!!
console.log(global.abc)

// Isso -- > this.c = 456 -- this.d = false -- this.e = 'teste' -- É a mesma coisa que fazer isso --> module.exports = { e: 456, f: false, g: 'teste'}