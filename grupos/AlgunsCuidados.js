const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

//dentro de um conjunto '[]' o grupo '()' não existe, seu significado é literal
console.log(texto.match(/[(abc)]/gi))  

//já o contrário é possível, um conjunto existem dentro de um grupo
console.log(texto.match(/([abc])/gi))

//recomendação de não usar grupos em RegEx para dividir operações lógicas, como acontece na aritmética.