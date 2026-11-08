# Flags (Bandeira) - Marca um local
# None = não valor
# is e is not, é ou não é (tipo, valor, identidade)
# id = identidade

condicao = False
passou_no_if = None

print(passou_no_if)

if condicao:
    passou_no_if = True
    print("Executa isso")
else:
    print("Executa aquilo")

print(passou_no_if, passou_no_if is None)
print(passou_no_if, passou_no_if is not None)