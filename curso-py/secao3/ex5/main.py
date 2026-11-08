"""
Faça um programa que peça ao usuário para digitar um número inteiro,
informe se este número é par ou ímpar. Caso o usuário não digite um número
inteiro, informe que não é um número inteiro.

Faça normal
Faça usando funcões depois
"""

#Fazendo normal
try:
    num = int(input("Digite um número inteiro qualquer: "))
    if num % 2 == 0:
        print("Ele é par")
    else:
        print("Ele é ímpar")
except ValueError:
    print("Esse número não é inteiro!")


# Fazendo usando funções

def imparOuPar(number): 
    try:
        number = int(number)
        if number % 2 == 0:
            return "Par"
        else:
            return "Ímpar"
    except ValueError:
        return "Não pode!"

num2 = input("Digite um número inteiro qualquer: ")
print(imparOuPar(num2))