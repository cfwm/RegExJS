const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//uma classse, isto é, conjunto de caracteres, é definida pelo uso de []

//obtem os caracteres que estão dentro do conjunto de forma separada, ou seja, estes caracteres são tratados isoladamente
//e não precisam estar ordenados na mesma sequência. 
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto'

//ontem letras com e sem acento
const regexComESemAcento = /n[aã]/g
console.log(texto2.match(regexComESemAcento))