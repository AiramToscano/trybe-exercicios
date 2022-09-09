meunome = input("Digite seu nome: ")

for i in range((meunome.__len__()- 1)):
    if(i ==0):
        print(meunome)
    teste = list(meunome)
    meunome = teste
    teste.pop()
    my_str = ''.join(teste)
    print(my_str)