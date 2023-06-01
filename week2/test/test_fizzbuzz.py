from fizzbuzz import PepsiCoke

# Can Call on PepsiCoke()
# Get “1” to print when passed a 1
def test_one():
    fizz = PepsiCoke(1)
    assert fizz == 1

# Get “2” to print when passed a 2
def test_one():
    fizz = PepsiCoke(2)
    assert fizz == 2
# Get “Pepsi” to print when passed a 3
def test_two():
    fizz = PepsiCoke(3)
    assert fizz == 'Pepsi'
# Get “Coke” to print when passed a 5
def test_three():
    fizz = PepsiCoke(5)
    assert fizz == 'Coke'
# Get “Pepsi” when passed a 6(a multiple of 3)
def test_four():
    fizz = PepsiCoke(6)
    assert fizz == 'Pepsi'
# Get “Coke” when passed a 10(a multiple of 5)
def test_five():
    fizz = PepsiCoke(10)
    assert fizz == 'Coke'
# Get “PepsiCoke” when passed a 15(a multiple of 3 and 5)
def test_siz():
    fizz = PepsiCoke(15)
    assert fizz == 'PepsiCoke'

def test_fail():
    fizz = PepsiCoke(4)
    assert fizz == 'no thanks'

def test_pass():
    fizz = PepsiCoke(13)
    assert fizz == False