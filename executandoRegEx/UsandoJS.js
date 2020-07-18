const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

console.log('Métodos da RegExp:')
const regexNove = RegExp('9')

//test -> retorna true ou false se o parâmetro passado (9) for encontrado na string (texto).
console.log(regexNove.test(texto))
//exec -> retorna as informações do parâmetro, caso ele seja encontrado.
console.log(regexNove.exec(texto))

console.log('Métodos da string:')

//match -> retona as letras presentes na string:
// const regexLetras = /[a-f]/g
// console.log(texto.match(regexLetras))
//ou
console.log(texto.match(/[a-f]/g))

//search -> retorna o índice do primeiro elemento passado ([a - f]) 
console.log(texto.search(/[a-f]/g))

//replace -> retorna uma string que modifica os elementos que coincidem com o primeiro parâmetro passado, 
//que pode ser um conjunto de coisas, pelo segundo parâmetro passado.
console.log(texto.replace(/[a-f]/g, 'Achei'))

//split -> gera um array a partir de um string após dividir a string e excluir os elementos que coincidem com o parâmetro passado.
console.log(texto.split(/[a-c]/g))