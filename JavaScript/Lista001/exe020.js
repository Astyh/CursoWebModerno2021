/* 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o 
 mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100,
 R$ 50, R$ 10 e R$ 5 e R$ 1.Seu programa deve mostrar apenas as notas utilizadas. Por exemplo,
 ao solicitar R$18, o programa deve informar apenas a seguinte informação 
 (note que não foram exibidas informações sobre as demais cédulas): 
 1 nota(s) de R$ 10, 1 nota(s) de R$ 5 e 3 nota (s) de R$ 1.*/

function calcCedulas(valor) {
    let cedula100 = 0, cedula50 = 0, cedula10 = 0, cedula5 =0, cedula1 = 0
    
    for(let i = valor; i > 0; i = valor) {
        if(valor >= 100) {
            cedula100++
            valor -= 100
        } else if (valor >= 50) {
            cedula50++
            valor -= 50
        } else if (valor >= 10) {
            cedula10++
            valor -= 10
        } else if (valor >= 5) {
            cedula5++
            valor -= 5
        } else if (valor >= 1) {
            cedula1++
            valor -= 1
        }        
    }
    let imprimi100 = cedula100 > 0 ? `-- ${cedula100} nota(s) de R$ 100 --` : ``
    let imprimi50 = cedula50 > 0 ? `-- ${cedula50} nota(s) de R$ 50 --` : ``
    let imprimi10 = cedula10 > 0 ? `-- ${cedula10} nota(s) de R$ 10 --` : ``
    let imprimi5 = cedula5 > 0 ? `-- ${cedula5} nota(s) de R$ 5 --` : ``
    let imprimi1 = cedula1 > 0 ? `-- ${cedula1} nota(s) de R$ 1 --` : ``

    console.log(` ${imprimi100} ${imprimi50} ${imprimi10} ${imprimi5} ${imprimi1}`)
}

calcCedulas(18)
calcCedulas(100)
calcCedulas(230)
calcCedulas(1301)
calcCedulas(1366)
calcCedulas(7848)
calcCedulas(0)
calcCedulas(-1)