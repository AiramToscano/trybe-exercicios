def sequenciapares(n):
    cont = 0
    for i in range(n):
        if(i % 2 ==0):
            cont +=1
    return cont
    

print(sequenciapares(10))