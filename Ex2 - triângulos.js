//Não foi considerado a condição de existência do triângulo

function ladosTriangulo (a,b,c) {
    if (a==b && a==c) {
        console.log(`Triângulo Equilátero`)
    }
    else if (a!=b && a!=c && b!=c) {console.log(`Triângulo Escaleno`)}
    else console.log (`Triângulo Isóceles`)
}

ladosTriangulo(5,5,5)
ladosTriangulo(5,4,5)
ladosTriangulo(5,4,4)
ladosTriangulo(5,5,6)
ladosTriangulo(3,4,5)