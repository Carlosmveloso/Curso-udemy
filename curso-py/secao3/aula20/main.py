# fatiamento das strings

# Fatiamento [i:f:p] [::]
""""
i = início
f = final
p = passo
"""
#.      0123456789...
nome = "Carlos Eduardo"
print(nome[::2])
print(f"{nome} tem {len(nome)} caracteres mas tem {len(nome)+1} índices")