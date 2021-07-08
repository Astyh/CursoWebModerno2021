const carrinho = [
    '{ "nome": "Borracha" , "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

// Minha resposta sem passar função

const newCarrinho = carrinho.map(function(e) { return JSON.parse(e)}).map(function(e) {return e.preco})
console.log(newCarrinho)

// Resposta do Professor passando função no Map, BEM MELHOR CÓDIGO MAIS LIMPO

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)