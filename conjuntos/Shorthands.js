// atalhos para alguns comandos de grupos

const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`


//Shorhands de valores numéricos:
// \d obtem todos os valores numéricos do texto
console.log(texto.match(/\d/g)) //[0-9]

// \D obtem tudo o que não é valor numérico 
console.log(texto.match(/\D/g)) //[^0-9]


// \w Shorhands de caracteres
console.log(texto.match(/\w/g)) // [a-zA-Z0-9_]

// \W não caracteres, traz tudo o que não está no conjunto [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) //[^a-zA-Z0-9_]

// \s espaços em branco, tab (\t), espaço em branco ( ), quebra de linha(\n), \f e \r - [ \t\n\r\f ]
console.log(texto.match(/\s/g))

// \S negação do \s, traz tudo o que não é espaço em branco - [ ^\t\n\r\f ]
console.log(texto.match(/\S/g))

//outros shorthands são o \b e \B, que tratam de bordas