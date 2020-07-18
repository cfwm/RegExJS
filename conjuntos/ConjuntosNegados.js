const texto = '1,2,3,a.b!cd?e[f'

//obtem [^0-9]
console.log(texto.match(/\D/g))
// o ^ tbm é metacarcter de negação dentro do conjunto [] 
console.log(texto.match(/[^0-9]/g))
console.log(texto.match(/[^\d]/g))
//tudo é negado pelo ^, obtem apenas as letras
console.log(texto.match(/[^\d!\?\[\s,\.]/g)) 


const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

//ontem a negação de dois intervalos, o primeiro !-/ e o segundo :-@, e o \s que representa os espaços 
console.log(texto2.match(/[^!-/:-@\s]/g))
//os caracteres !"#$%&\'()*+,-./ estão no intervalo !-/
//os caracteres :;<=>?@ estão no intervalo :-@

//para saber onde começam e terminam o range dos caracteres ver unicode-table.com/pt