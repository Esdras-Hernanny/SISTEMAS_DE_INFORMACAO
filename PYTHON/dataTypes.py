# Estudos em python

# Tipos de dados em python

"""
Para verificar o tipo de dado retornado por uma variável ou mesmo função
podemos utilizar a função nativa "type()", que retorna o tipo de dado requisitado.
Veja abaixo o exemplo...
"""

x = 'hello world' # Retorna str
y = 10 # Retorna int
z = True # Retorna bool
w = ['Ana', 'Bia', 'Carla'] # Retorna list
t = ('Ana', 'Bia', 'Carla') # Retorna tuple
d = {
    "name" : "Esdras",
    "lastName" : "Nascimento",
    "age" : 33
}

print(d["name"])
print(type(d)) # Substitua a variável e veja no terminal seu tipo.

""" 
Obs: a principal diferença entre uma lista e uma tupla é que a tupla
não permite alteração em seu conteúdo, seja modificar, incluir ou excluir itens.
"""

# Verifique também outros tipo de dados suportados pela linguagem.