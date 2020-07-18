const texto = 'supermercado hipermercado minimercado mercado'
//obtem um grupo opcional que tem a palavra 'super' ou '|' 'hiper' ou '|' 'mini' seguido da palavra 'mercado
console.log(texto.match(/(super|hiper|mini)?mercado/g))

//o mesmo exemplo de cima com grupos aninhados
console.log(texto.match(/((hi|su)per|mini)?mercado/g))