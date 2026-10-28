# Introdução a try/except
# try -> tentar executar um código
# expect -> ocorreu algum erro ao tentar executar

# isdigit() verifica se o user digitou apenas números

str_number = input("Digite um número para eu dobrar: ")

try:
    float_number = float(str_number)
    print(f"Flaot: {float_number}")
    print(f"O dobro de {float_number} é {float_number * 2}")
except ValueError:
    print("Oi")
