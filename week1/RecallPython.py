class RecallingPython:
    def __init__(self):
        self.data = []

    def add_num(self, num):
        self.data.append(num)

    def add_string(self, title):
        self.data.append(title)

    def add_dictionary(self, season):
        self.data.append(season)

    def add_tuple(self, plans):
        self.data.append(plans)

    def tuple_conversion(self):
        self.data = tuple(self.data)


new_list = RecallingPython()
new_list.add_num(85)
new_list.add_string("So ready for summer.")
new_list.add_dictionary({"summer": "sunny days"})
new_list.add_tuple(("beach", "poolside days"))


print(new_list.data)


new_list.tuple_conversion()
print(new_list.data)