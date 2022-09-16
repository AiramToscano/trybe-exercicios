import math
import statistics


class Estatistica:
    def __init__(self, lista: list):
        self.__lista = lista
    
    def getMedia(self):
        soma = 0
        for i in self.__lista:
            soma += i
        media = soma / self.__lista.__len__()
        return media
    
    def getMediana(self):
       if(self.__lista.__len__() % 2 != 0):
           lista1 = sorted(self.__lista)
           num = self.__lista.__len__() / 2
           numProximo = math.ceil(num)
           return lista1[numProximo]
       else:
        num = int(self.__lista.__len__() / 2)
        lista1 = sorted(self.__lista)
        num2 = int(num + 1)
        soma = lista1[num -1] + lista1[num2 -1]
        mediana =  soma /2
        return mediana

    def getModa(self):
        return statistics.mode(self.__lista)






MediaAiram = Estatistica([15,10,14,15,16,14,10,10])
stringMedia = ("A media das notas do airam é: ")
print(stringMedia + str(MediaAiram.getMedia()))
stringMedia = ("A mediana das notas do airam é: ")
print(stringMedia + str(MediaAiram.getMediana()))
stringMedia = ("A moda das notas do airam é: ")
print(stringMedia + str(MediaAiram.getModa()))
