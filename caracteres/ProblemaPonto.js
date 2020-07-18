const texto = 'Bom\ndia'
const texto2 = 'Bom\tdia'
// o . representa qualquer caractere, exceto o \n
console.log(texto.match(/./gi))

console.log(texto.match(/.../gi))
console.log(texto2.match(/.../gi))