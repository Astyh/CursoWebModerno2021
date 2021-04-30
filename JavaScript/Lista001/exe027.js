/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento 
anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor
ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de 
medida. */

function calcCres20Anos(array1, array2) {

    if (array1[0] == array2[0]) {
        console.log('As crianças tem a mesma altura !')

    } else {
       let maior = array1[0] > array2[0] ? array1 : array2   
       let menor = array1[0] < array2[0] ? array1 : array2       
       let tempo = 0

       while(maior[0] >= menor[0] && tempo <= 21) {

           tempo++
           maior[0] += maior[1]
           menor[0] += menor[1]           
       }

       if(tempo > 20) {
           console.log('A criança menor não passará a maior em 20 anos !!')

       } else {
           console.log('A criança menor passará a maior em ' + tempo + ' ano(s) !!')
       }
    }   
}

calcCres20Anos([70, 2],[70, 1])
calcCres20Anos([60, 2],[62, 1])
calcCres20Anos([60, 2],[83, 1])
calcCres20Anos([70, 1],[60, 2])
calcCres20Anos([60, 1],[62, 2])
calcCres20Anos([60, 3],[61, 1])