file = open("arquivo.txt", mode="w")

file.write("Marcos 10\n")
file.write("Felipe 4\n")
file.write("José 6\n")
file.write("Ana 10\n")
file.write("Maria 9\n")
file.write("Miguel 5\n")

try:
    file = open("arquivo.txt", mode="r")
    for nomes in file:
        notas = nomes.split()
        if(int(notas[1]) < 6):
          print(notas[0])
            
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    file.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")