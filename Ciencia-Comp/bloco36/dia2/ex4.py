def mdc(num1, num2, i, soma):
    if(num1 % i == 0 and num2 % i == 0):
        num1 = num1/i
        num2 = num2/i
        soma *= i
        i=1
    if(num1 % i != 0 and num2 % i != 0):
        return soma
    return mdc(num1, num2, i + 1, soma)

            
print(mdc(20,24,2, 1))
