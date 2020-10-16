/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

jurosSimples = (capitalInicial,txJuros,tempoAplicacao) => console.log(`Juros simples: ${capitalInicial*(1+tempoAplicacao*txJuros)}`)

function jurosCompostos (capitalInicial, txJuros, tempoAplicacao) {
    console.log (`Juros Compostos: ${capitalInicial*Math.pow(1+txJuros,tempoAplicacao).toPrecision(10)}`)
    jurosSimples (capitalInicial,txJuros,tempoAplicacao)
}

jurosCompostos (100, 0.1, 2)