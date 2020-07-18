//o quantificador é definido por {}

const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.'
const texto2 = 'O João recebeu 120 milhoes apostando 6 9 21 23 45 46.'

//obtem todos os dígitos, separando/quebrando por por ou unidade - 
//é guloso, pega o máximo possível 2, se não conseguir pega 1.
//qubra o 120 em 12 e 0
console.log(texto.match(/\d{1,2}/g))

//apenas obtem números em par.
console.log(texto.match(/[0-9]{2}/g))

//obtem número em unidade 1 e em de todos os tamanhos
console.log(texto.match(/\d{1,}/g))


//quantificadores com palavras

//não obtem a palavra milhões pois em \w não há õ
console.log(texto.match(/\w{7}/g))

//com texto2, obtem a palavra milhoes
console.log(texto2.match(/\w{7}/g))

//agora obtem mihlões ou mihloes
console.log(texto.match(/[\wõ]{7,}/g))

//obtem o os caracteres definidos por \wõ e \s
console.log(texto.match(/[\wõ\s]{7}/g))


//no futuro com bordas -> \b...\b 

//obtem apenas o números que possuem 1 ou 2 caracteres, não quebra o 120 em 12 e 0
console.log(texto.match(/\b\d{1,2}\b/g))

//bordas com palavras
console.log(texto.match(/\b[\wõ]{7}\b/g))