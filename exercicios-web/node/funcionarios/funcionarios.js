const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Funções
const filtraPais = (lista, nomePais) => lista.filter(e => e.pais === nomePais)
const filtraGenero = (lista, qualGenero) => lista.filter(e => e.genero === qualGenero)
const menorSalario = (lista) => {
    return lista.reduce((v, e) => e.salario < v.salario ? e : v )
}

const maiorSalario = (lista) => {
    return lista.reduce((v, e) => e.salario > v.salario ? e : v )
}


axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // COM FUNÇÃO
    // Mulher chinesa com menor salário
    let filtrado = filtraPais(funcionarios, 'China')
    filtrado = filtraGenero(filtrado, 'F')
    filtrado = menorSalario(filtrado)
    console.log(filtrado)


    // SEM FUNÇÃO
    // Mulher chinesa com menor salário
    const chinaFeMenorSalario = funcionarios.map(e => e )
    .filter(e => e.genero == 'F' && e.pais == 'China' )
    .reduce((v, e) => e.salario < v.salario ? e : v )
    console.log(chinaFeMenorSalario)

})


