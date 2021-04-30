/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade 
do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
 1) crianças com menos de 10 anos pagam R$ 80; 
 2) conveniados com idade entre 10 e 30 anos pagam R$ 50; 
 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 
 4) conveniados acima de 60 anos pagam R$ 130 */

const sbBRL = (valor = 0) => { 
    
    return (valor).toLocaleString('pt-BR', {style :'currency', currency: 'BRL'})

 }
 function calculaValorPlano(idade) {

     let valorPlano = 100, adicional = 0

     if(idade < 10) {
         adicional = 80

     } else if (idade <= 30) { 
         adicional = 50

     } else if (idade <= 60) {
         adicional = 95

     } else {
         adicional = 130
     }

     return console.log(`Plano: ${sbBRL(valorPlano)}\nIdade: ${idade}\nAdicional Idade: ${sbBRL(adicional)}\nTotal: ${sbBRL((valorPlano + adicional))}\n-------------\n`)
 }

calculaValorPlano(9)
calculaValorPlano(10)
calculaValorPlano(30)
calculaValorPlano(31)
calculaValorPlano(60)
calculaValorPlano(61)
calculaValorPlano(103)