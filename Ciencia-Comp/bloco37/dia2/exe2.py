# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
import numpy as np


cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def embaralhaCarta(array, partes):
    array1 = []
    array2 = []
    arraytodo = []
    for index,i in enumerate(array):
        if(index < partes):
            array1.append(i)
        else:
            array2.append(i)
    for index1,i in enumerate(array1):
        for index2, j in enumerate(array2):
            if(index1 == index2):
                arraytodo.append(i)
                arraytodo.append(j)

    print(arraytodo)
 
#complexidade O(n ^ 2)

def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer

#complexidade O(n)




embaralhaCarta(cartas, 3)
print(shuffle(cartas))



