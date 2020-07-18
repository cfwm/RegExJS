// Flags:
// g - global 
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'
//RegEx para encontrar a primeira ocorrência de C ou( | ) ab na string ( texto ) e retornar suas informações.
console.log(texto.match(/C|ab/))

//RegEx para encontrar a primeira ocorrênica de C ou ab na string, ignorando case sensitive ( i ), e retornar suas informações.
console.log(texto.match(/c|ab/i))

//RegEx para encontrar todas ( g ) as ocorrências de C ou ab na string, ignorando case sensitive, e retornar suas informações.
console.log(texto.match(/ab|c/gi))