// 11)​As regras para o cálculo dos anos bissextos são as seguintes:De 4 em 4 anos é ano bissexto; De 100 em 100 anos não é ano bissexto; De 400 em 400 anos é ano bissexto; Prevalecem as últimas regras sobre as primeiras. Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando  true ou false.

const eBissexto = (ano) => { 
    let bissexto = false
    if(ano%400 == 0) {
        bissexto = true        
    } else if (ano%100 == 0) {
        bissexto = false
    } else if (ano%4 == 0) {
        bissexto = true
    }
    let eOuN = bissexto == true ? 'é' : 'não é'

    return console.log(`O ano ${ano} ${eOuN} um ano bissexto!!`)
 } 

 eBissexto(4)
 eBissexto(100)
 eBissexto(400)
 eBissexto(600)
 eBissexto(800)
 eBissexto(1000)
 eBissexto(1200)
 eBissexto(2020)
 eBissexto(2022)
 eBissexto(2024)