/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte
 quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou 
 seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.
 */

function intervalo10E20(vet) {
    let dentro = 0
    let fora = 0
    for (let i = 0; i < vet.length; i++) {
        vet[i] >= 10 && vet[i] <= 20 ? dentro++ : fora++
    }
    console.log(`${dentro} números DENTRO do intervalo de 10 á 20 e ${fora} números FORA do intervalo`)
 }

 intervalo10E20([1,2,11,10])
 intervalo10E20([1,2,11,10])
 intervalo10E20([10,20])
 intervalo10E20([10, 20, 10, 15, 17, -3, -4])