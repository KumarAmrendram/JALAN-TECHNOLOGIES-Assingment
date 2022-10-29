class Drink:
    def __init__(self, name, size, drinkType):
        self.__type = drinkType
        self.__size = size
        self.__name = name
        self.__flavors = []
        self.__numFlavors = 0
        self.__toppings = []
        self.__numEspresso = 0
        self.__typeSweetener = "None"
        self.__numSweetener = 0
        self.__typeDairy = "None"

    # Define addEspresso method
    def addEspresso(self, num):
        if num > 0:
            self.__numEspresso += 1
    # Define addSweetener method

    def addSweetener(self, num, preference):
        if num > 0:
            self.__typeSweetener = preference
            self.__numSweetener += num
    # Define addFlavor method

    def addFlavor(self, flavor, num):
        self.__flavors.append(flavor)
        self.__numFlavors += num
    # Define addTopping method

    def addTopping(self, topping):
        self.__toppings.append(topping)
    # Define addDairy method:

    def addDairy(self, preference):
        self.__typeDairy = preference

    def __str__(self):
        return (f"{self.__name} ordered a {self.__size}{self.__drinkType} with the following additions: \n"
                f"{self.__numEspresso} Espresso shots \n"   
                f"{self.__numFlavors} {self.__flavors} flavor shots \n"
                f"{self.__typeDairy}")
