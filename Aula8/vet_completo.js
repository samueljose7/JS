var vet=[4,5,6,94,5,6] /* criando um vetor aleatorio */
console.log(`O vetor tem ${vet.length} posições`) /* comando para saber o tamanho do vetor */
console.log(`O primeiro valor do vetor é ${vet[0]}`) /* pra dar print em um elemento especifico do vetor */
vet.push(17) /* comando para adicionar um numero ao vetor */
console.log(`${vet}`)/* print do vetor */
console.log(`${vet.sort()}`)/* Botar o vetor em forma crescente */
for (pos=0; pos<vet.length; pos++){
    console.log(`A posição ${pos+1} tem o valor ${vet[pos]}`) /* for basico para saber os valores e posições do vetor */
} 
/* OUTRO JEITO DE FAZER O FOR PARA SABER A POSIÇÃO E O VALOR DO VETOR
for(var pos in vet) {
    console.log(`A posição ${pos} tem o valor ${vet[pos]}`)
} */
var pos1=vet.indexOf(4)/* O valor digitado entre os "()" do indexOf sera verificado pra ver se tem no vetor */
if (pos1==-1) { /* o comando acima resultara no numero se tiver e se nn tiver resultará em -1 */
    console.log(`O valor digitado nn tem no vetor`) /* aproveitando o-1 para fazer esse if */
} else {
    console.log(`O valor está na posição ${pos1}`) /* se o numero digitado no indextiver mostrar a posição dele */
}
 