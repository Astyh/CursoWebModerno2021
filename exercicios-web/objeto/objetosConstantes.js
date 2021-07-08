// pessoa -> 123 -> {...} a constante aponta para um endereço
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = { nome: 'Ana'} Dá erro pois pessoa armazena um endereço e ela é uma constante e vc não pode mudar o endereço

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome) 
console.log(pessoa) // O objeto foi congelado com o Object.freeze(pessoa) e não pode ser alterado/adicionado ou removido

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)