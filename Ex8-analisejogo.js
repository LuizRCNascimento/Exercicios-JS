/*Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

placar = [30, 40, 20, 4, 151, 25, 42, 38, 56, 10]
vetor = []

function jogo () {
    let recorde=0
    let pior = 0
    let max=placar[0]
    for (let i=1; i<placar.length; i++) {
        if (placar[i]>max) {
            max=placar[i]
            recorde++
        }
        if (placar[i]<placar[pior]) pior=i+1
    } console.log ([recorde,pior+1])
} 
jogo()