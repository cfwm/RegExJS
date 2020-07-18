const texto = 'aʬc௵'

//para obter esses caracteres especiais deve-se usar:
//U+02AC
//U+0BF5
//verificar código em unico-table.com/pt
console.log(texto.match(/\u02ac|\u0bf5/g))