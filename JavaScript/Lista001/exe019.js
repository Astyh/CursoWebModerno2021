/* 19)​O cardápio de uma lanchonete é o seguinte:
Código      Descrição do Produto        Preço
 100          Cachorro Quente          R$ 3,00
 200         Hambúrguer Simples        R$ 4,00
 300           Cheeseburguer           R$ 5,50
 400              Bauru                R$ 7,50
 500           Refrigerante            R$ 3,50
 600               Suco                R$ 2,80
 Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.
*/

function cardapio(codItem, quant) {
    switch(codItem) {
        case 100:
            console.log(`Cachorro Quente R$ 3,00 cada -- Quantidade: ${quant} -- Total = R$ ${(quant * 3).toFixed(2).replace('.',',') } `)
            break
        case 200:
            console.log(`Hambúrguer Simples R$ 4,00 cada -- Quantidade: ${quant} -- Total = R$ ${(quant * 4).toFixed(2).replace('.',',') } `)
            break
        case 300:
            console.log(`Cheeseburguer R$ 5,50 cada -- Quantidade: ${quant} -- Total = R$ ${(quant * 5.50).toFixed(2).replace('.',',') } `)
            break
        case 400:
            console.log(`Bauru R$ 7,50 cada -- Quantidade: ${quant} -- Total = R$ ${(quant * 7.50).toFixed(2).replace('.',',') } `)
            break
        case 500:
            console.log(`Refrigerante R$ 3,50 cada -- Quantidade: ${quant} -- Total = R$ ${(quant * 3.50).toFixed(2).replace('.',',') } `)
            break
        case 600:
            console.log(`Suco R$ 2,80 cada -- Quantidade: ${quant} -- Total = R$ ${(quant * 2.80).toFixed(2).replace('.',',') } `)
            break
        default:
            console.log('O código do produto não consta no sistema!')
    }
}

cardapio(100,5)
cardapio(200,2)
cardapio(300,3)
cardapio(400,6)
cardapio(500,1)
cardapio(600,8)
cardapio(700,5)
cardapio(601,5)