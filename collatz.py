#
# def collatz(number):
#     cont = 1
#     lista = []
#
#     while number > 1:
#         if number % 2:
#             number = 3 * number + 1
#             lista.append(number)
#         else:
#             number = number / 2
#             lista.append(number)
#
#         cont+=1
#
#     #print(lista)
#     return cont,lista
#
#
# print(collatz(525)[1])
#
#
# def maiorInteiro():
#     maior = 0
#
#     for i in range(1,4):
#         size = collatz(i)[0]
#         if size > maior:
#             maior = size
#
#     return maior
#
# print(maiorInteiro())
#


# def LargestCollatz(n):
#
#     # Collatz lengths, first entries are 'hand calculated'
#     cl = [0, 1, 2]
#
#     for i in range(3, n):
#         c = i
#         length = 0
#         while True:
#             if c % 2 == 0:
#                 c = c//2
#             else:
#                 c = 3*c+1
#             length += 1
#
#             if c < i:
#                 cl.append(length + cl[c])
#                 break
#
#     return cl.index(max(cl)),cl[max(cl)],max(cl)
#
# print(LargestCollatz(1000000))

#https://codereview.stackexchange.com/questions/128589/find-out-the-number-under-1-million-which-produces-the-largest-collatz-sequence

# def maiorSequencia(n):
#     lista = [1,2]
#
#     for i in range(3,n):
#         count = 0
#         while i > len(lista):
#             if i % 2 == 0:
#                 i = i/2
#             else:
#                 i = 3*i+1
#             count += 1
#         lista.append(count + lista[int(i-1)])
#         #print(lista)
#
#     return max(lista)
#
# print(maiorSequencia(1000000))
