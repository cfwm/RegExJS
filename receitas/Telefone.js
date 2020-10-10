const texto = `
    - (21) 12345-6789
    - (11) 62300-2234
    - 5678-7771
    - (85)3333-7890
    - (1) 4321-1234
`
//obtem o dd com 2 dígitos e é opcional '(\(\d{2}\)\s?)?'
//obtem o número de telefone '\d{4,5}-\d{4}'
console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))