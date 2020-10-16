/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores
*/

function divisao (dividendo,divisor)  {
    console.log(`Dividendo:`,dividendo)
    console.log(`Divisor:`,divisor)
    console.log(`Quociente:`,Math.floor(dividendo/divisor))
    console.log(`Resto:`,dividendo%divisor)
}

divisao (15,3)