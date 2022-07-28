let vetor = new Array('Maria', 'Esdras', 'Vanessa', 'Paula')

//O JS possui diversos métodos para manipulação de vetores abaixo segue
//os mais utilizados com exemplos de sua utilização.

// PUSH()

// a função .push() insere um determinado valor em um vetor já existente
// sempre na ultima posição do mesmo.

/*
let novoValor = 'Sávio'
vetor.push(novoValor) // Retorna [ 'Maria', 'Esdras', 'Vanessa', 'Paula', 'Sávio' ]
*/

// POP()

// Possui função reversa em relação ao método anterior, ou seja,
// ele retira de um vetor pré-existente seu último valor.

// Pode ser usado da seguinte forma meuVetor.pop(), utilize no console e veja o resultado

//console.log(vetor.pop()) retorna 'Paula' valor retirado do vetor.


// forEach() é uma estrutura de repetição bastante utilizada para trabalhar com manipulação
// de vetores por sua versatilidade. Veja o exemplo abaixo:

// Vamos criar um programa que imprime uma mensagem para cada aluno que tem seu
// nome na lista de aprovados de uma universidade

/* Definindo o vetor, para esse caso iremos utlizar a notação Objeto Literal JS
let aprovados = [
    {nome: 'Esdras', universidade: 'UFRN'},
    {nome: 'Maria', universidade: 'IFRN'},
    {nome: 'Vanessa', universidade: 'UERN'},
    {nome: 'Paula', universidade: 'UFERSA'}
]

// Agora iremos utilizar a estrutura de repetição
aprovados.forEach((aprovado) =>{
    console.log(`Parabens ${aprovado.nome} você foi aprovado na universidade ${aprovado.universidade}`)
})*/

// SHIFT()

// Esse método funciona como o já visto pop(), no entanto ele retira do vetor seu primeiro elemento
// vide o exemplo abaixo:

// Nele iremos utilizar nosso vetor declarado no início do nosso arquivo JS
//console.log(vetor.shift()) Retorna 'Maria', item removido do vetor.

// UNSHIFT()

// Método oposto ao shift(). Com seu uso conseguiremos adicionar um valor no
// início do vetor. Veja o exemplo:

//console.log(vetor.unshift('Fernando')) Retorna um vetor com 5 posições, adicionado ao início 'Fernando'

// INDEXOF()

// Esse método é utilizado para verificar se um elemento existe em um vetor e retorna a posição do mesmo.
// OBS: Caso o valor procurado não exista no vetor ele retorna o valor -1

// Exemplo
//console.log(vetor.indexOf('Luiz'))

console.log(vetor)