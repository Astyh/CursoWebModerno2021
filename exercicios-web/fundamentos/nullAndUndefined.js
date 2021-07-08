const a = {name: 'Teste'}
console.log(a)

const b = a
b.name = 'Opa'

console.log(a)  // a const A também muda pq na verdade A guarda o endereço de memória do objeto e B também também , então os 2 aponta pro mesmo objeto assim modificando a const B ou o A o mesmo objeto é modificado

let c = 3

let d = c

d++
console.log(d) // Nesse caso como é um valor primitivo da linguagem (não um Objeto) foi feito uma copia por valor e não pelo endereço, assim modifcando o D ele NÃO MODIFICA o C
console.log(c)

// COMEÇO DO ARQUIVO DELE NO JS

let valor // Não inicializada -- UNDEFINED
console.log(valor)

valor = null // Ausência de valor , foi inicializada mas sem nenhum valor e nem aponta para nenhum endereço de memória
console.log(valor)
// console.log(valor.toString()) // ERRO!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined  // Evite atribuir Undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
