/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
Exemplos:
despesasTotais([
{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99
despesasTotais([
{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89
 */


const getPreco = (obj) => obj.preco
const soma = (total = 0, atual) => total + atual

const despesasTotais = (array) => { return array.map(getPreco).reduce(soma) }

const array1 = [{ nome: "Jornal online", categoria: "Informação", preco: 89.99 }, { nome: "Cinema", categoria: "Entretenimento", preco: 150 }]
const array2 = [{ nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 }, { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 }]

console.log(despesasTotais(array1)) // retornará 239.99
console.log(despesasTotais(array2)) // retornará 34599.89