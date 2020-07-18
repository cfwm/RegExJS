const texto = `
Leo é muito legal
Emanuel foi jogar em Sergioe
Bianca é casada com Habib
`
//obtem as quebras de linhas, '\n'
console.log(texto.match(/\n/g))
//obtem 'null' pois o '.' não pega quebra de linha
console.log(texto.match(/^(\w).+\1$/gi))
//Flag multline 'm' para quebra de linha e obter cada linha separadamente, se ela começa e termina com a mesma letra capturada.
console.log(texto.match(/^(\w).+\1$/gim))