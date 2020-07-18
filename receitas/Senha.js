const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234

#OpA1?
Foi123!
`
//captura qualquer string entre 6 e 20 caracteres
console.log(texto.match(/^.{6,20}$/gm))

//obtem qualquer string que tenha de 6 a 20 caracteres '{6,20}' e  qualquer caractere maiúsculo '^(?=.*[A-Z])'
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))

//expressão final com todas as validações:
//'^(?=.*[A-Z])' -> o começo da string deve ter zero ou mais caracteres maiúsculos
//'(?=.*[a-z])' -> o segundo grupo deve ter zero ou mais caracteres minúsculos
//'(?=.*\d)' -> o terceiro grupo deve ter zero ou mais dígitos
//'(?=.*[@#$%^&*])' o último grupo deve ter zero ou mais caracteres especiais definidos em '[@#$%^&*]'
//'.{6,20}$' a string deve ter de 6 a 20 caracteres 
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*]).{6,20}$/gm))

