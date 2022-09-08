nomes =  ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
maior = nomes[0]
for i in nomes:
    if(i.__len__() > maior.__len__()):
        maior = i

print(maior)



