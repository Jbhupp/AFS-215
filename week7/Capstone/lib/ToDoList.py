class ToDoList:
    def __init__(self):
        self.list = []

    def addItem(self, item):
        self.list.append(item)
        return item

    def addMultiItems(self, items):
        self.list.extend(items)
        return items

    def removeFirstItem(self):
        self.list.pop(0)
        return self.list

    def removeLastItem(self):
        self.list.pop()
        return self.list

    def removeSpecificItem(self, item):
        self.list.remove(item)
        return self.list