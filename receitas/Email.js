const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - fulano+de+tal@escola.ninja.br
    `
//captura e-mails válidos
//'\S+' não espaço, um ou mais
//'@' caractere @
//'\w+' vários caracteres
//'\.' ponto literal
//'\w{2,6}' qualquer string com 2 a 6 caracteres
//'(\.\w{2})?' qualquer string com 2 caracteres
    console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))