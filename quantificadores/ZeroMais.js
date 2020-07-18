// * zero ou mais
const texto1 = 'De longo eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'Thera is a big fog in NYC'

// * -> zero ou mais ocorrências da letra antes de *
const regex = /fogo*/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))