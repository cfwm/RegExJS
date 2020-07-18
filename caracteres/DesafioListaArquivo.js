const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcasr.mp3,blues.mp3'

//obter as ocorrências da referrência .mp3 aparece
console.log(texto.match(/\.mp3/g))
//obter o número de ocorrências da referência .mp3
console.log(texto.match(/\.mp3/g).length)

//obter os caracteres que vem antes de .mp3
console.log(texto.match(/\w+\.mp3/g))