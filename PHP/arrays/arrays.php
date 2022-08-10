<?php
    
$myArray = array (
    'nome' => '',
    'sobrenome' => '',
    'idade' => 33,
    'sexo' => 'm'
);

//Definidos o vetor acima iremos ver os métodos para manipulá-lo

// Função Print_r() - ela imprime o numero de elementos em um determinado vetor.
#print_r($myArray)

// Função Count() - retorna o número de posições em um determinado vetor
#count($myArray);

// Função array_splice()  - remove do vetor através de parâmetros (vetor, índice, quantidade).
#array_slice($myArray, 1,2);