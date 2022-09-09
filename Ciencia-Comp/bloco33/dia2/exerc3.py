import random


try:
    file = open("nomes.txt", mode="r")
    list =[]
    for nomes in file:
        notas = nomes.split()
        list.append(notas[0])
    word = random.choice(list)
    scrambled_word = "".join(random.sample(word, len(word)))
    i = 0
    while i <= 3:
     print(scrambled_word)
     print(i)
     meuNumeroInput = input("que palavra é essa? voce tem 3 chances: ")
     if meuNumeroInput == word:
      print("Parabéns, voce acertou a palavra")
      break
     if i >= 2:
      print("Voce perdeu")
      file.close()
      break
     i += 1
            
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")