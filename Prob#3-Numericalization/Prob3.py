#generate defualt-sized number
numString = [
        ['0'*5] + ['0'+3*' '+'0']*3 + ['0'*5], #0
        [' '*4+'1']*5, #1
        ['2'*5, ' '*4+'2', '2'*5, '2' + ' '*4, '2'*5],#2
        (['3'*5,' '*4 + '3']*3)[:5],#3
        ['4'+' '*3+'4']*2 + ['4'*5] + [' '*4+'4']*2, #4
        ['5'*5, '5' + ' '*4, '5'*5, ' '*4+'5', '5'*5], #5
        ['6'*5, '6' + ' '*4,  '6'*5,'6' + ' '*3 + '6', '6'*5], #6
        ['7'*5] + [' '*4 + '7']*4, #7
        (['8'*5, '8' + ' '*3 + '8']*3)[:5], #8
        ['9'*5, '9' + ' '*3 + '9', '9'*5, ' '*4 + '9', '9'*5] #9
]

#input
N, M1, M2 = input().split()
M1, M2 = int(M1), int(M2)

#generate number for each row
for row in range(5):
  text = ''

  #add number for each column
  for number in N:

    #add each numbers' row 
    for t in numString[int(number)][row]:
      text += M2*t

    #add space of each number
    text += ' '*M2

  #multiply height of number
  for height in range(M1):
    print(text)
