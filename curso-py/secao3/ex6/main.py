"""
Faça um programa que pergunte a hora ao usuário e, baseando-se no horário 
descrito, exiba a saudação apropriada. Ex. 
Bom dia 0-11, Boa tarde 12-17 e Boa noite 18-23.

Faça normal
Faça usando funcões
"""

# Fazendo sem def

time = input("Digite a hora: ")

try:
    time = float(time)
    if time > 24:
        print("Digite uma hora válida entre 00:00 e 23:59")
    elif time >= 18 and time < 24:
        print("Boa noite!")
    elif time >= 12 and time < 18:
        print("Boa Tarde!")
    else:
        print("Bom dia!")
except ValueError:
    print("Num pode")


# Fazendo usando com def

def qualBomDia(time):
    try:
        time = float(time)
        if time > 24:
            return "Digite uma hora válida entre 00:00 e 23:59"
        elif time >= 18 and time < 24:
            return "Boa noite!"
        elif time >= 12 and time < 18:
            return "Boa Tarde!"
        else:
            return "Bom dia!"
    except ValueError:
        return "Não pode"

time2 = input("Digite uma hora: ")

print(qualBomDia(time2))