const aplicarCor = ( txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

//cria caminho para a pasta 'files'
const files = require('./files')

//obtem arquivo 'codigoFonte.html'
const texto = files.read('codigoFonte.html')

//obtem, através de expressão regular, tudo entre as tags '<code>' e '</code>'
const codeRegex = /<code>[\s\S]*<\/code>/i

//a variável 'codigo' será alterada sempre que a página sofrer alguma mudança
let codigo = texto.match(codeRegex)[0]
//o '[0]' é usado pois haverá apenas um texto dentro de das tags 'code'

//String...
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce(178')

//palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)/g, 'd857cf')

//tipos
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')

//comentários de múltiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703')

//comentários de uma linha
codigo = aplicarCor(codigo, /(\/\.*?\n)/g, '267703')

const conteudoFinal = texto.replace(codeRegex, codigo)
files.write('codigoFonte.html', conteudoFinal)