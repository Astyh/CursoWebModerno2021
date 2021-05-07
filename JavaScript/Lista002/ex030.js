/* Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 } */


const soma = (array) => array.reduce((total, atual) => total + atual)
const media = (array) => soma(array) / array.length

function recerberMelhorEstudante(obj) {
    const alunos = Object.assign([], Object.entries(obj)).map(e => {

        return { nome: e[0], media: media(e[1]) }
    })
    alunos.sort((a, b) => b.media - a.media)

    return alunos[0]
}

const alunos = {
    Joao: [8, 7.6, 8.9, 6], 
    Mariana: [9, 6.6, 7.9, 8], 
    Carla: [7, 7, 8, 9] 
}


console.log(recerberMelhorEstudante(alunos))  // retornará { nome: "Mariana", media: 7.875 }