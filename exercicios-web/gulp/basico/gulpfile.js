const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb) {  //cb = callback

    // gulp.src('pastaA/**/*.txt') // Obs: Significa qualquer arquivo que esteja na pastaA e que tenha a extensão .txt séra copiada para a pastaB 

    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // Você seleciona diretamente os arquivos
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)