//As bordas funcionam melhor em palavras sem acentuação

const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

//obtem todas as palavras que começam com 'dia' '\bdia' seguidas de qualquer coisa '\w+'
console.log(texto1.match(/\bdia\w+/gi))

//obtem todas as palavras que terminam com 'dia' '\bdia' e são precedidas de qualquer coisa '\w+'
console.log(texto1.match(/\w+dia\b/gi))

//obtem todas as palavras que contém o texto 'dia' no meio da palavra
console.log(texto1.match(/\w+dia\w+/gi))

//obtem todas as palavras que contém o texto 'dia' no meio da palavra ou não
console.log(texto1.match(/\w*dia\w*/gi))

//obtem apenas a palavra 'dia'
console.log(texto1.match(/\bdia\b/gi))

//uma borda, '\b' = '[^A-Za-z0-9_]', é o oposto de '\w' = '[A-Za-z0-9_]'
const texto2 = 'dia diatônico diagragma, média wikipédia bom-dia melodia radial'
//obtem 4 ocorrências de 'dia', pois considera os caracteres acentuados e os espaços em branco como borda
console.log(texto2.match(/\bdia\b/gi))
//obtem todos os caracteres, acentuados ou não, e caracteres especiais, como ',' e '-'
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))
//obtem todas as palavras com acentuação e '-', mas sem caracteres especiais como ','
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi))
