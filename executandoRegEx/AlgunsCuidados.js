const textoUmaLinha = 'se o texto tiver apenas uma linha, pode ser colocado entre aspas simples ou duplas.' 


const textoMultiLinhas = ` 
    Se o texto tem mais de uma linha,
    deve ser colocado entre crases.
`

//cuidado com tab!
console.log('	'.match(/\s/g)) //com um tab são retornados três espaços

console.log(''.match(/\s/g)) //sem nenhum espaço volta null.

//para configuar o tab para ser reconhecido como não e não como 3 espaços vazios, deve procurar pro 
//Indent Using Tab na IDE e colocar 4 -> hecho!