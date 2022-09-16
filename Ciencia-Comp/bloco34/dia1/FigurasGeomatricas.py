from FiguraGeometrica import FiguraGeometrica


class Quadrado(FiguraGeometrica):
    def __init__(self,lado):
        self.__lado = lado
    def area(self):
        return self.__lado ** 2

    def perimetro(self):
        return self.__lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base,altura):
        self.__base = base
        self.__altura = altura
    
    def area(self):
        return self.__base * self.__altura

    def perimetro(self):
        Baseperimetro = 2  * (self.__base + self.__altura)
        return Baseperimetro

class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.__raio = raio
    
    def area(self):
        return self.__raio * self.__raio * 3.14

    def perimetro(self):
         return 2 * self.__raio * 3.14




quadrado = Quadrado(2)
retangulo = Retangulo(2,4)
circulo = Circulo(5)


print("A area do quadrado é : " + str(quadrado.area()))
print("O perimetro do quadrado é : " + str(quadrado.perimetro()))
print("A area do retangulo é : " + str(retangulo.area()))
print("O perimetro do retangulo é : " + str(retangulo.perimetro()))
print("A area do circulo é : " + str(circulo.area()))
print("O perimetro do circulo é : " + str(circulo.perimetro()))

