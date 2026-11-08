"""
Faça um programa que peça o primeiro nome do usuário. Se o nome tiver 4 letras ou 
menos escreva "Seu nome é curto"; se tiver entre 5 e 6 letras, escreva 
"Seu nome é normal"; maior que 6 escreva "Seu nome é muito grande". 

Faça normal
"""

full_name = input("Digite seu nome: ")

first_name = full_name.split()
qtd_letters = len(first_name[0])

print(f"{first_name[0]}")
if qtd_letters <= 4:
    print("Seu nome é curto !")
elif qtd_letters >= 5 and qtd_letters <= 6:
    print("Seu nome é normal !")
else:
    print("Seu nome é muito grande !")

