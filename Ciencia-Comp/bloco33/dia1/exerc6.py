def verificaTriangulo(ladoa,ladob,ladoc):
    if ladoa + ladob < ladoc:
     return "não é triangulo"
    elif ladoc == ladoa == ladoc:
     return "Triangulo Equilátero"
    elif ladoc == ladoa or ladoa == ladob or ladoc == ladob:
     return "Triangulo Isósceles"
    elif ladoc != ladoa != ladob:
     return "Triangulo Escaleno"




print(verificaTriangulo(2,2,3))
