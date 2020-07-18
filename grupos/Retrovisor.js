//retrovisores '$1...' ou '\1...' são formas de referencias elementos capturados pelos grupos '()'
//se estabeleço três grupos em uma regex, terei três retrovisores: $1, $2, e $3 ou \1, \2 e \3 

const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

//captura as tags de abertura presentes no texto1 '<(\w+)>', captura qualquer coisa zero ou mais vezes '.*' 
//e captura exatamente o que estava no primeiro retrovisor '\1', de modo a formar elementos <(\w+)>.*<\/\1>
//isto é <tag>texto</tag>:
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'
//captura o grupo '(lenta)', captura o grupo '(mente)', '.*' captura qualquer coisa, '\2' captura o grupo 2 (mente), 
//'.*' captura qualquer coisa, '\1' captura grupo 1 (lenta), '\.' escape para captura de . literal.
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))

//como não guardar o valor do grupo, colocando a interrogação e dois pontos no grupo '(?:lenta)', este grupo não é capturado
// pelo retrovisor.
//'(?:lenta)' grupo não capturado com os quantificadores '?:', '(mente)' captura grupo 1, '.*' captura qualquer coisa, 
//'\1' referencia grupo 1:
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

//captura apenas os grupo (lenta) e (mente) unidos na mesma substring
console.log(texto2.match(/(lenta)(mente)/gi))

//o grupo (mente) não é capturado 
console.log(texto2.match(/(lenta)(mente)?/gi))

//'(lenta)' captura o grupo 1, '(mente)' captura o grupo dois, com o método replace() o '$2' substitui a primeira palavra 
//da string 
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

//agora o replace coloca outros caracteres com o grupo 1 no lugar da primeira palavra
console.log(texto2.replace(/(lenta)(mente)/gi, '? $1P OP'))

const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g))