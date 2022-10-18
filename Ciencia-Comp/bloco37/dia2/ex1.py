# 1 - OK
# 0 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def VerificarInstabilidade(array):
    tam = array.__len__() - 1
    cont = 0
    for index, i in enumerate(array):
        if (index < tam and array[index] == array[index + 1] and i != 0):
            cont += 1
    return f"O tempo maximo que o servidor ficou sem instabilidades foi {cont} horas"


print(VerificarInstabilidade(valores_coletados))


# complexidade é 0(n) para tempo e espaço