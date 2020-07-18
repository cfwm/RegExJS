//o conjunto é definido por (estar entre parênteses)

const texto1 = 'O José Simão é muito engraçado... hehehehehe'

//obtem todos os he (he) presentes no texto, mesmo que estejam numa mesma palavra 
console.log(texto1.match(/(he)/g))

//obtem todos os he (he) e qualquer caractere seguido de o (.o)
console.log(texto1.match(/(he)|(.o)/g))

//obtem todos o grupo que possui he (he) presentes no texto, outros caracteres são agrupados após he
console.log(texto1.match(/(he)+/g))


const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
//obtem as três urls
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))

//(http:\/\/)? neste grupo, busca-se 'http:' com escape \ em '\/' duas vezes para que a / seja usada no sentido literal,
//e por último torna sua presença opcional '?'.

//(www\.)? neste grupo, busca-se 'www' com escape \ em '\.' para que seja usado o sentido literal do .
//e por último torna sua presença opcional '?'.

//\w+ pega qualquer coisa escrita

//\.\w{2,} usa escape \ para que o . seja literal '\.', seguido de qualquer coisa duas ou mais vezes 

//(\.\w{2})? neste grupo, busca-se por um . literal '\.', seguido de qualuqer coisa duas vezes e é opcional