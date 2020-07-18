const texto = '.$+*?-'

//em conjunto, os metacaracteres funcionam de forma literal, para serem metacaracteres necessitam do \
console.log(texto.match(/[+.?*$]/g))

//obtem um dos símbolos que estão no conjunto seguindo de qualquer outro caractere
console.log(texto.match(/[+.?*$]./g))

//o - é usando como intervalo (range) entre $ e ? e também como um caractere literal
console.log(texto.match(/[$-?]/g))


//NÃO é intervalo (range)

//antes do -, há um \. Busca apenas pelos símbolos $, - e ? 
console.log(texto.match(/[$\-?]/g))

//o - tbm não é intervalo pois não tem os dois parâmetros da range
console.log(texto.match(/[-?]/g))

// caracteres que podem precisar do escape dentro do conjunto pois são metacaracteres dentro do conjunto: - [] ^  