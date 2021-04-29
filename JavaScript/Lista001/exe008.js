// 08)​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). Obs.: O primeiro jogo não conta como novo recorde do melhor.Exemplo:String: “10 20 20 8 25 3 0 30 1”Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)


function registraJogo(array) {
    const newArray = array.split(' ')
    let jogoAntigo = newArray[0] 
    let piorJogo = newArray[0]
    let cont = 0
    let posPiorJogo = 1

    for(let i = 0;i < newArray.length; i ++){
        if(parseInt(newArray[i]) > parseInt(jogoAntigo)){
            cont++
            jogoAntigo = newArray[i]
        }
        if(parseInt(newArray[i]) < parseInt(piorJogo)){
            posPiorJogo = i + 1
            piorJogo = newArray[i]
        }
    }
    
    return [cont,posPiorJogo]    
}
    
console.log(registraJogo('10 20 20 8 25 3 0 30 1'))