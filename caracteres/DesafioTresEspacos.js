const texto = 'a   b'
// p próprio espaço em branco representa os espaços em branco
console.log(texto.match(/a   b/))

//cada \s representa um espaço em branco
console.log(texto.match(/a\s\s\sb/))

// o \s representa um espaço em branco e o + representa outro espaço em branco em qualquer número de repeticão.
console.log(texto.match(/a\s+b/))
//o (espaço em branco) {3} representa que existem três espaços em branco entre a e b
console.log(texto.match(/a {3}b/))
//agora o espaço em branco é representado pelo \s e deve ter três repetições, devido o quantificador {3}
console.log(texto.match(/a\s{3}b/))