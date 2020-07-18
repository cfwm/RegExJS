const texto = 'ABC [abc] a-c 1234'

//traz todos os a, b, e c minúsculos. Note que o range - entre a e c não é selecionado.
console.log(texto.match(/[a-c]/g))

//não define o range, que aqui é usado como caractere literal pois não está em um conjunto []
console.log(texto.match(/a-c/g))

//[A-z] traz todas as letras minúsculas e maiúsculas e os colchetes, pois o intervalo usa a ordem da tabela ASCII, ou UNICODE
//que coloca alguns símbolos entre o A e o z, além das letras maúsculas e inúsculas: letras maiúsculas; símbolos; letras minúsculas.
console.log(texto.match(/[A-z]/g))

//o intervalo deve respeitar a ordem da tabela UNICODE. Dá erro:
// console.log(texto.match(/[a-Z]/g))
// console.log(texto.match(/[4-1]/g))

//traz apenas as letras, maíusculas e imúsculas
console.log(texto.match(/[a-zA-Z]/g))