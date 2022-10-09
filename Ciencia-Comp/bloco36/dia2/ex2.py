def sequenciapares(n, cont):
    if(n == 0):
        return cont
    if(n % 2 == 0):
        cont +=1
        sequenciapares(n-1, cont)
    return sequenciapares(n-1, cont)

    


print(sequenciapares(20,0))