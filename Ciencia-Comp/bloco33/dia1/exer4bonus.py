def PintarCasa(litros,tipodecombustivel):
    precogasolina = 2.5
    precoalcool = 1.9
    if(tipodecombustivel == 'Álcool'):
        if(litros <= 20):
            SomaDesconto  = 3 * litros
            Soma = litros * precoalcool
            desconto = SomaDesconto/ 100
            SomaToTal = Soma * desconto
            msg = ("Valor total a ser pago é : "+ str(SomaToTal), "o Combustivel escolhido foi Alcool")
            print(msg)
        if(litros > 20):
            SomaDesconto  = 5 * litros
            Soma = litros * precoalcool
            desconto = SomaDesconto/ 100
            SomaToTal = Soma * desconto
            msg = ("Valor total a ser pago é : "+ str(SomaToTal), "o Combustivel escolhido foi Alcool")
            print(msg)

    if(tipodecombustivel == 'Gasolina'):
        if(litros <= 20):
            SomaDesconto  = 4 * litros
            Soma = litros * precogasolina
            desconto = SomaDesconto/ 100
            SomaToTal = Soma * desconto
            msg = ("Valor total a ser pago é : "+ str(SomaToTal), "o Combustivel escolhido foi Gasolina")
            print(msg)

        if(litros > 20):
            SomaDesconto  = 6 * litros
            Soma = litros * precogasolina
            desconto = SomaDesconto/ 100
            SomaToTal = Soma * desconto
            msg = ("Valor total a ser pago é : "+ str(SomaToTal), "o Combustivel escolhido foi Gasolina")
            print(msg)
                                             
    else:
        msg1 = ("Esse combustivel não existe")
        print(msg1)



PintarCasa(15, "Gasolina")