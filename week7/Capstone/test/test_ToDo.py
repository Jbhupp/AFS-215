import pytest
from lib.ToDoList import ToDoList

@pytest.fixture
def todolist():
    todolist = ToDoList()
    return todolist

def testCanCallList(todolist):
    todolist

def testCanAddItem(todolist):
    # link = ToDoList()
    todolist.addItem('Run Errands')
    assert todolist.addItem('Run Errands') == 'Run Errands'

def testCanAddMultipleItems(todolist):
    # link = ToDoList()
    items = ['Go to Bank', 6, True, {"door": "wood"}]
    assert todolist.addMultiItems(items) == ['Go to Bank', 6, True, {"door": "wood"}]

def testRemoveFirstItem(todolist):
    # link = ToDoList()
    items = ['Go to Bank', 6, True, {"door": "wood"}]
    todolist.addMultiItems(items)
    assert todolist.removeFirstItem() == [6, True, {"door": "wood"}]

def testRemoveLastItem(todolist):
    # link = ToDoList()
    items = ['Go to Bank', 6, True, {"door": "wood"}]
    todolist.addMultiItems(items)
    assert todolist.removeLastItem() == ['Go to Bank', 6, True]

def testRemoveSpecificItem(todolist):
    # link = ToDoList()
    items = ['Go to Bank', 6, True, {"door": "wood"}]
    todolist.addMultiItems(items)
    assert todolist.removeSpecificItem(6) == ['Go to Bank', True, {"door": "wood"}]