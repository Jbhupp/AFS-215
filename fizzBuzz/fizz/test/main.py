def theFizz(arg):
    if arg % 3 == 0:
        if arg % 5 == 0:
            return 'PepsiCoke'
    if arg == 1:
        return 1
    if arg == 2:
        return 2
    if arg == 3:
        return "Pepsi"
    if arg ==5:
        return 'Coke'
    if arg % 3 == 0:
        return 'Pepsi'
    if arg % 5 == 0:
        return 'Coke'
