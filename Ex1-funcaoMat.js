/* Curso Udemy 
Luiz Nascimento 2020/10/07 
Teste github update 2020/10/08 - github.com/LuizRCNascimento */


const soma = function (a,b) {
        console.log(`Soma: ${a+b}`)
    }
const multip = function(a,b) {
    console.log (`Multiplicação:`,a*b)
}
 
function sub (a,b) {
    return function (c) {
        console.log (`Subtração:`,a-b-c,`(Função que retorna uma função)`)
    }
}


//Função Arrow -  
adicao = (a,b) => console.log (`Adição:`,a+b,`(Arrow function)`)
subtracao=(a,b) => console.log (`Subtração:`,a-b,`(Arrow function)`)
mult=(a,b) => console.log (`Multiplicação:`,a*b,`(Arrow function)`)
divisao=(a,b) => console.log (`Divisão:`,a/b,`(Arrow function)`)

soma (2,4)
adicao (1,10)
subtracao (100,5)
sub (12,4) (7)
mult (10,8)
multip (14,3)
divisao(100,25)