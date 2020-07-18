const texto = 'Você precisa responder sim, não ou não sei!'

//obtem todas as ocorrências de sim, não e sei
console.log(texto.match(/sim|não|sei/g))

console.log(texto.match(/sim|não sei|não/g))


const texto2 = 'Você precisa responder sim, nao ou não sei!'

//obtem todas as ocorrências de sim, n.o (em que o . representa qualquer caractere) e sei 
console.log(texto2.match(/sim|n.o|sei/g))