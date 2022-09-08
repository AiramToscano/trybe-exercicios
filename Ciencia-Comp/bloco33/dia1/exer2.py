notas = [1,4,5,6,2,10]
sum = 0
for number in notas:
    sum += number

total = sum / notas.__len__()
msg = "sua media é de: "
print(msg + str(total))