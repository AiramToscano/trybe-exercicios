class TV:
    def __init__(self, tamanho, ):
        self.__volume = 0
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False
    
    def aumentar_volume(self):
        if(self.__volume <= 99):
          self.__volume += 1
        else:
            return self.__volume
    def diminuir_volume(self):
        if(self.__volume > 0):
          self.__volume -= 1
        else:
            return self.__volume
    
    def getvolume(self):
        return self.__volume

    def modificar_canal(self, canal1):
        if(1 <= canal1 < 99):
            self.__canal = canal1
            return self.__canal
        else:
            raise ValueError('Canal não disponivel')
    
    def ligar_desligar(self):
        if(self.__ligada == False):
            self.__ligada = True
            return self.__ligada
        if(self.__ligada == True):
            self.__ligada = False
            return self.__ligada
    def getLigada(self):
        return self.__ligada
    
    def getTamanho(self):
        return self.__tamanho

minhaTV = TV('44 polegadas')

minhaTV.ligar_desligar()
minhaTV.ligar_desligar()  

print(minhaTV.getLigada())
print(minhaTV.modificar_canal(20))
print(minhaTV.getTamanho())
