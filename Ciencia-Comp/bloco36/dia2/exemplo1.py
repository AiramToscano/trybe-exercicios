def recursao(cont):
    if(cont >= 50):
        print(f'o numero {cont} é maior ou igual a 50')
    if(cont < 50):
        print(f'o numero {cont} é menor que 50')
        recursao(cont + 1)


recursao(0)


