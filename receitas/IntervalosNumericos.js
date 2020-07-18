const texto = '0 1 10 20 192 199 201 249 255 256 312 1010 1512'

//obtem números entre 0-255
//obtem os números por faixas de números 0-99 -> '\d{1,2}', 100-199 -> '1\d{2}', 200-249 -> '2[0-4]', 250-255 -> '25[0-5]'
console.log(texto.match(/\b(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])\b/g))