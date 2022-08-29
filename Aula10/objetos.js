/* //Para declarar objetos:
var amigo={nome:"josé",sexo:"M", peso:"85.4", engordar(p=0){
    this.peso += p
}}
amigo.engordar(2)


console.log(amigo)

console.log(amigo.nome)
console.log(`${amigo.nome} pesa atualmente ${amigo.}`) */
let amigo = { nome: 'José',
sexo: 'M',
peso:'85,4',
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)/*  manipulação semelhante ao vetor */