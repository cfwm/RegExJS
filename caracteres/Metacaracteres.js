/*
----
Metacaracteres - Representantes
_____________________________________________________________________
| Metacaracter |      Nome       | Significado                      |
| .            |      Ponto      | Um caractere qualquer            | 
| []           |     Conjunto    | Conjunto de carcteres permitidos |
|_[^]__________|__Conjunt_Negado_|__________________________________|


----
Metacaracteres - Quantificadores
__________________________________
| MC  |   Nome    | Significado  |
| ?   |  Opcional | Zero ou um   |
| *   | Asterisco | Zero ou mais |
| +   |   Mais    | Um ou mais   |
|{n,m}|__Chaves___|_De_na_até m__|


-----
Metacaracteres - Âncoras
_______________________________________________
| MC |     Nome    | Significado              |
| ^  | Circunflexo | Início da fila           |
| $  |    Cifrão   | Fim da fila              |
|_\b_|_____Borda___|_Início_ou_fim_de_palavra_|


------
Outros Metacaracteres
_________________________________________________________
|   MC  |   Nome   | Significado                        |
|    \  |  Escape  | Uso de metacaracteres como literal |
|    |  |    Ou    | Operação de Ou                     |
|   ()  |   Grupo  | Define um grupo                    |
|\1...\9|Retrovisor|_Resgata_grupos_já_definidos________|

----
*/

const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexPonto = /\./g
//encontra o ponto e quebra a string divide a string, neste caso sempre que houver .
console.log(texto.split(regexPonto))

const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))