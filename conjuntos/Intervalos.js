const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//obtem todas as letras entre A e Z minúsculas.
console.log(texto.match(/[a-z]/g))

//obtem todas as letras entre B e D minúsculas.
console.log(texto.match(/[b-d]/g))

//obtem todos os números entre 2 e 4
console.log(texto.match(/[2-4]/g))

//obtem todas as letras entre A e Z, maiúsculas e minúsucas, e todos os números entre 1 e 3
console.log(texto.match(/[A-Z1-3]/gi))