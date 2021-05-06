/* Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"
 */

function nomeDoMes(mes) {
    let nome = ''
    mes == 1 ? nome = 'Janeiro' :
    mes == 2 ? nome = 'Fevereiro' :
    mes == 3 ? nome = 'Março' : 
    mes == 4 ? nome = 'Abril' :
    mes == 5 ? nome = 'Maio' :
    mes == 6 ? nome = 'Junho' :
    mes == 7 ? nome = 'Julho' :
    mes == 8 ? nome = 'Agosto' :
    mes == 9 ? nome = 'Setembro' :
    mes == 10 ? nome = 'Outubro' :
    mes == 11 ? nome = 'Novembro' :
    mes == 12 ? nome =  'Dezembro' : nome = 'Mês Inválido'

    return console.log(nome)
}

nomeDoMes(1)
nomeDoMes(4)
nomeDoMes(0)
nomeDoMes(13)