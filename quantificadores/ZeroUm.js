// ? opcional
const texto1 = 'De longo eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'Thera is a big fog in NYC'

//? -> 0 ou 1 (opcional), nenhuma ou uma ocorrencia  da letra antes de ? é opcional 
console.log(texto1.match(/fogo?/gi))
console.log(texto2.match(/fogo?/gi))

// ou
const regex = /fogo?/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))