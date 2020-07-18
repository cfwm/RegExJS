const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'

//ontem todos os caracteres da const texto
console.log(texto.match(/[À-ü]/g))
//o shortwand para encontrar letras \w não considera muitas acentuações, em muito caso é melhor usar [\wÀ-ü]
//que unifica o shorhand \w e o conjunto [À-ü], de modo a obter todos os caracteres da língua portuguesa.
