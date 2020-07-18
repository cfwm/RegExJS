//. representa um coringa, vale para qualquer caractere, exeto a quebra de linha \n

const texto = '1,2,3,4,5,6,7,8,9,0'

//nesse contexto, o . representa qualquer coisa entre 1 e 2
console.log(texto.match(/1.2/g))

//o . tem a mesma função do exemplo acima, a diferença é que agora são dois pontos, isto é,
//dois caracteres quaisquer entre 1 e 2
console.log(texto.match(/1..2/g))

//o . tem a mesma função que no exemplo anterior, mas agora procura por dois caracteres quaisquer entre 1 e ,
console.log(texto.match(/1..,/g))


const notas = '8.3,7.1,8.8,10.0'

//encotra strings que começam com 8 seguidos de dois outros caracteres quaisquer
//neste contexto o ponto serve para representar um caractere genérico, incluíndo o próprio .
console.log(notas.match(/8../g))
//encontra qualquer caractere (o primeiro .) seguido de um . ( o \.) seguido de qualquer caractere (o último .)
console.log(notas.match(/.\../g))