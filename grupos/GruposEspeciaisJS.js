const texto = 'João é calmo, mas no transito fica nervoso.'

//'[\wÀ-ú]+'obtem todas as palavras
console.log(texto.match(/[\wÀ-ú]+/gi))

//positive lookahead - verifica o elemento a frente para decidir o que vem antes
//'(?=,)' procura uma vírgula após a palavra '[\wÀ-ú]'
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
//'(?=\.)' procura um ponto literal após a palavra '[\wÀ-ú]'
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
//'(?=, mas)' procura uma vírgula, após a palavra '[\wÀ-ú]', que antecede a palavra 'mas'
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))


//Negative lokkahead
//busca por palavras '[\wÀ-ú]' que não estão na frente de ','
//nesse casso, o 'é' não é selecionado pois é considerado borda '\b'
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
//agora pega todas as palavras que estão antes de uma vírgula
//eventualmente pega espaço '\s' e ponto '\.' após as palavras. 
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))
 