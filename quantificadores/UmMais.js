// + um ou mais
const texto1 = 'De longo eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'Thera is a big fog in NYC'

// + -> um ou mais ocorrência da letra antes de +
const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))


const texto3 = 'Os números: 0123456789.'

//obtem todos os caracteres de 0 a 9 separados
console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/\d/g))
console.log(texto3.match(/[0-9]+?/g)) 

//obtem todos os caracteres de 0 a 9 juntos
console.log(texto3.match(/[0-9]+/g))
console.log(texto3.match(/\d+/g))