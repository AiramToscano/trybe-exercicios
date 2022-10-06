
import random


def arrayaleatorio():
    array = []
    for i in range(10):
        x = random.randint(1,100)
        array.append(x)
    return array


print(arrayaleatorio())