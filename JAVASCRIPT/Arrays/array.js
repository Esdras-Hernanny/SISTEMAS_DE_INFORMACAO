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

// Definindo o vetor, para esse caso iremos utlizar a notação json
let aprovados = [
    {nome: 'Esdras', universidade: 'UFRN'},
    {nome: 'Maria', universidade: 'IFRN'},
    {nome: 'Vanessa', universidade: 'UERN'},
    {nome: 'Paula', universidade: 'UFERSA'}
]

// Agora iremos utilizar a estrutura de repetição
aprovados.forEach((aprovado) =>{
    console.log(`Parabens ${aprovado.nome} você foi aprovado na universidade ${aprovado.universidade}`)
})

//console.log(vetor)