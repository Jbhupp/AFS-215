import pytest
from lib.develop import RandomList


@pytest.fixture()
def items():
    items = RandomList()
    items.addToList('Coat')
    items.addToList('Food')
    return items


def test_add(items):
    assert items.addToList('Movie') == ['Coat', 'Food', 'Movie']

def testSearchItem(items):
    assert items.searchItem('Drinks') == False
    
def testSearchItem1(items):
    assert items.searchItem('Food') == True

def testEvaluateItems(items):
    assert len(items.list) != 0