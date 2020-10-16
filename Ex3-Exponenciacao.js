/* Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/


exponenciação = (a,b) => console.log (`Primeira forma:`,Math.pow (a,b))

function exponenciação2 (a,b) {
    return Math.pow(a,b)
}

let expo = function (a,b) {
    console.log(`Terceira forma:`,Math.pow(a,b))
}

exponenciação(2,10) //função Arrow
console.log(`segunda forma:`,exponenciação2(3,2) )
expo(4,2)