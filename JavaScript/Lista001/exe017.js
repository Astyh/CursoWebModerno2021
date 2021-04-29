/* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
 Plano  Aumento
   A      10%
   B      15%
   C      20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido */

const aumento = (salario, plano) => {
    plano = plano.toUpperCase()
    switch(plano) {
        case 'A':
            console.log(`Aumento de 10% no funcionário de plano ${plano} salário passa de ${salario} para ${salario + (salario * 0.1)} `)
            break
        case 'B':
            console.log(`Aumento de 15% no funcionário de plano ${plano} salário passa de ${salario} para ${salario + (salario * 0.15)} `)
            break
        case 'C':
            console.log(`Aumento de 20% no funcionário de plano ${plano} salário passa de ${salario} para ${salario + (salario * 0.2)} `)
            break
        default:
            console.log(`O plano ${plano} é um plano inválido!!`)
    }
}

aumento(5300, 'C')
aumento(8000, 'a')
aumento(4570, 'B')
aumento(5000, 'f')
aumento(7000, '@')
aumento(10000,'3')