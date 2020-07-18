const texto = `
ca	r
r	o s!
`
console.log(texto.match(/ca/))

//obtem o primeiro ca seguido de um tab. o \t representa o tab
console.log(texto.match(/ca\t/))

//obtem o primeiro ca seguido de um tab. o \s representa um esaço em branco
console.log(texto.match(/ca\tr\nr\to\ss!/))