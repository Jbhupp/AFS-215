def Kata(number):
    if number == 1:
        print("1")
    elif number == 2:
        print("2")
    else:
        output = ""
        if number % 3 == 0:
            output += "Pepsi"
        if number % 5 == 0:
            output += "Coke"
        print(output)


Kata(1)
Kata(2)
Kata(3)
Kata(5)
Kata(6)
Kata(10)
Kata(15)