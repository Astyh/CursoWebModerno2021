/* 07)​Uma das vantagens da programação é a automatização de tarefas que não gostamos de
 realizar. Dito isto,elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para 
 isso, sua função deve receber trêsparâmetros, “ax2”, “bx” e “c”, de tal modo que na equação:
 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um 
 vetor que tem 2 valores um para cada possível resultado, mesmoque os resultados sejam iguais.
 Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:“Delta é 
 negativo”.*/

function Bhaskara(ax2,bx,c) {

    var delta = Math.pow(bx,2) - (4*ax2*c)
    var x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    var x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    console.log('Delta: ',delta)    
    var result = [x1,x2]
    if(delta < 0)
    {
        return console.log('Delta é Negativo')
    }else{
        return  console.log('Valores de X1 e X2:',result)
        
    }     
    
}

Bhaskara(3,-5,12)
console.log('------------------------- \n')
Bhaskara(3,-15,12)
console.log('------------------------- \n')
Bhaskara(2,4,1)
console.log('------------------------- \n')