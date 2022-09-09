
import random


word = random.choice(["airam", "vasco", "casa"])

scrambled_word = "".join(random.sample(word, len(word)))

print(scrambled_word)

i = 1
while i <= 3:
  meuNumeroInput = input("que palavra é essa? voce tem 3 chances: ")
  print(scrambled_word)
  if i >= 3:
    print("Voce perdeu")
    break
  if meuNumeroInput == word:
    print("Parabéns, voce acertou a palavra")
    break
  i += 1