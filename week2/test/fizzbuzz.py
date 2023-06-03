def PepsiCoke(num):
    if ((num % 3) == 0 and (num % 5) == 0):
        return 'PepsiCoke'
    else:
        if num == 1:
            return 1
        elif num == 2:
            return 2
        elif (num % 3) == 0:
            return 'Pepsi'
        elif num == 4:
            return 'no thanks'
        elif (num % 5) == 0:
            return'Coke'
        else:
            return False
print(PepsiCoke(1))
print(PepsiCoke(2))
print(PepsiCoke(0))
print(PepsiCoke(4))
print(PepsiCoke(5))
print(PepsiCoke(False))