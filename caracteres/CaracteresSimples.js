const texto = '1,2,3,4,5,a,b c!d?e'

const regexVirgula = /,/

//split -> quebra o texto a cada vírgula encontrada
console.log(texto.split(regexVirgula))

//match -> retorna a primeira , encontrada e informações sobre ela
console.log(texto.match(regexVirgula))

//match g-> retorna todas as , encontradas
console.log(texto.match(/,/g))

//match A g-> retorna todas as letras A encontradas
console.log(texto.match(/A/g))

//match A gi -> retorna todas as letras A minúsculas e maiúsculas encontradas
console.log(texto.match(/A/gi))

//match 2 g -> retorna todos os números 2 encontrados
console.log(texto.match(/2/g))

//match texto maior -> retorna o texto informado, se encontrado:
console.log(texto.match(/b c!d/))