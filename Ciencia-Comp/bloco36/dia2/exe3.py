def AcharNumeroMaior(lista):
    maiorNumero = lista[0]
    for i  in lista:
        if(i > maiorNumero):
            maiorNumero = i
    return maiorNumero


def AcharNumeroMaiorrecursao(lista, index,maior):
    novo = lista.__len__() - 1
    if(lista[index] > maior):
        maior = lista[index]
    if(index == novo):
        return maior
    return AcharNumeroMaiorrecursao(lista, index + 1, maior)


    
     



print(AcharNumeroMaior([2,400,110,5,600]))
print(AcharNumeroMaiorrecursao([2,400,110,5,600],0,0))

            

