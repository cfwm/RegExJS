//por padrão, os quantificadores são gulosos:

const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//obtem o máximo possível - quantificadores gulosos - greedy
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

//não é guloso (greedy) nem não guloso (lazy) 
console.log(texto.match(/<div>.{0,11}<\/div>/g))

//quantificadores não gulosos (lazy)
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
