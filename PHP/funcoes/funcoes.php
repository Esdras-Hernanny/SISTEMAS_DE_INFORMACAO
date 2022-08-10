<?php
// As funções em PHP são bem semelhantes a forma como outros linguagem já trabalham:
// Um trecho de código com funções específica e que tem em seu propósito a reutilização do mesmo
// resultando numa mior produttividade ao time de desenvolvimento.
// Outro fator importante é que as funções também podem ser utilizadas para executar tarefas
// específicas dentro do código como um todo.

//Exemplo de função

function soma($num1, $num2)
{
    return $num1 + $num2;
}

// Suponha, no código acima,  que eu queira criar um função que que faça uma soma simples e retorne o valor da
// operação entre dois números. No entanta nõ quero que toda vez que eu tenha que somar um valor eu tenha
// que criar uma nova função. para tal segue:

$var1 = 1;
$var2 = 2;

echo soma($var1, $var2); // Ao invocar a função criada anteriormente e lhe atribuir como parâmetros as
                         // variáveis $var1 e $var2 com seus valores e respectivos 1 e 2 teremos impresso
                         // o valor 3 que é o resultado da soma calculadopela função que criamos.
                         // Esse é um exemplo básico para o entendimento das funções no PHP. no entanto 
                         // ainda iremos explorar alguns conceitos sobre funções pela frente.

