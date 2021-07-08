// Meu teste sem ver o do professor

function criarProduto1(nome, preco) {
    return {
        nome: nome,
        preco: preco,
        desconto: preco-(0.1 * preco)
    }
}

console.log(criarProduto1('sabonete', 4.50))

// Agora o do professor

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 1199.49))