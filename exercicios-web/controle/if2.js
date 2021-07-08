function teste1(num) {
    if(num > 7)     // Por que não ter chaves ele considera a primeira linha de codigo como estando dentro do if e a segunda fora
        console.log(num)  
    console.log('Final')    
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); {   // Por causa do ponto e virgula ele considera que somente o ponto e virgula faz parte do IF ou melhor ele praticamente encerra o if e executa sempre o que ta fora  então ele vai imprimir o numero toda vez independente se é maior ou menor que 7. NÃO USAR COM AS ESTRUTURAS DE CONTROLE , IF ELSE, SWITCH ....ETC
        console.log(num)
    }
}

teste2(6)
teste2(8)