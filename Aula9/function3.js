function fatorial(n) {
    var fat=1
    for (var i=n; i>1; i--) { /* a cada vez que i for maior q 1 o i diminuira no laço */
        fat *= i /* fat=fat*i */
    }
    return fat
}
console.log(fatorial(5)) /* numero escolhido */