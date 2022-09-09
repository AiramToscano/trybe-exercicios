def PintarCasa(metros):
    litrosTotal = metros / 3
    latasTotal = round(litrosTotal / 18)
    if(latasTotal == 0):
        msg = ("quantidades de latas é : 1", "preço total é : 18")
        print(msg)
    else:
        msg1 = ("quantidades de latas é : "+ str(latasTotal), "preço total é: " + str(latasTotal * 18))
        print(msg1)



PintarCasa(100)