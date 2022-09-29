# Início dos estudos em Python - Obs: para executar algum trecho de código remova o #

# Quanto a comentários:
# Utilizamos em Python o "#" para comentários de uma linha
""" Já em casos de multiplas linhas utilizamos as aspas duplas 3 vezes no começo e no final.""" 

# Tema 1 - Sintaxe básica

# 1.1 - Declarando variáveis

# Python é uma linguagem de tipagem dinâmica logo, não é necessário
# definir os tipos de dados ao declarar uma variável. Segue a declaração a seguir:

# x = 10 

# print(x) # Retorna 10 no console.

# Nesse caso como temos a variável "x" armazenando um valor "n" de forma dinâmica
# se atribuirmos um novo valor a variável e um novo tipo não teremos nenhum problema.
# Exemplo:

# x = "dez"

# print(x) # Embora as duas funções "print()" estajam chamando a variável "x" termos duas saídas diferentes.

# Também é possível imprimir mais de um valor passando-os como parâmentro na função "print()"
# exemplo abaixo:

"""
a = 1
b = 2
c = 3
print(a, b, c)
"""

# Na sintaxe básica do python os comando devem ser utilizados em uma única linha, exemplo:

# a = 1
# b = 2

# Logo caso declaremos duas ou mais variáveis ou comandos em uma mesma linha, 
# o interpretador nos retornará um erro de sintaxe. Exemplo:

# a = 1 b = 2

# Sendo necessário que a expressão acima seja utilizada será necessário adicionar um
# separador do tipo ponto e vírgula entre as declarações. Exemplo:

# a = 1; b = 2

# Outra característica interessante quanto a sintaxe do python 
# é relativa a delimitação de um bloco de código que se dá pelo
# símbolo ":"(dois pontos) e pela própria indentação. Exemplo:

"""
a = 1
b = 'variável b fora do escopo'
print(b)

if a < 2: # ":" inicializa o escopo
    b = 'variável a é menor que 2' #subordinação hierárquica da variável b
    print(b)
"""