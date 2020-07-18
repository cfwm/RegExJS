const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

//seleciona todos os 'r' do texto.
console.log(texto.match(/r/gi))

//'^r' obtem letra 'r' em início de linha/string
console.log(texto.match(/^r/gi))

//'r$' obtem letra 'r' no fim da linha/string
console.log(texto.match(/r$/gi))

//'^r' obtem letra 'r' no início da frase, '.*' obtem qualquer coisa, 'r$' obtem letra 'r' no final da frase,
//não funciona pois o '.*'n não pega quebra de linha '\n'
// console.log(texto.match(/^r.*r$/gi))



