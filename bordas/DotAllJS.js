const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

// console.log(texto.match(/^r.*r$/gi)) -> problema do dotall
//resolve o problema do dotall, seleciona tudo.
console.log(texto.match(/^r[\s\S]*r$/gi))



