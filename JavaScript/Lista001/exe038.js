/* 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir 
todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para 
início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor 
maior antes do menor. */

function imprimiImpares(min, max) {
    min > max ? [min, max] = [max, min] : [min, max] = [min, max]

    console.log(`Ímpares entre ${min} e ${max}`)
    for (let i = min; i < max; i++) {

        i % 2 != 0 ? console.log(`${i}`) : i
    }
    console.log('----------------------')

}

imprimiImpares(0, 100)
imprimiImpares(100, 0)