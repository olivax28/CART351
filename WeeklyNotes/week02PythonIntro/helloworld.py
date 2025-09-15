#!/usr/bin/python3
# print("hello world")

# print(33/5) #float division
# print(33//5) #floor division
# print(100-25 *4) #rules of precedence
# print(3%4) #exponents
# print(25**2) #to the power of

# print(3 > 5) # > < != == >= <=  returns true or false

# # and, or, not are logical operators

# print (True and True)

# print (not(True))


#variables
#just ype the name ex:
# cars = 100
# space_in_car = 3
# drivers = 30
# passengers = 90
# cars_not_driven = cars - drivers
# cars_driven = drivers
# car_pool_capacity = cars_driven * space_in_car

# car_name = "subaru"

# print(car_pool_capacity)
# print(car_name)
# print(f"the car's name is {car_name}")

# car_statement = f"the car's brand is a {car_name}"

# print(car_statement)

# input("type your name:") #result can be stores in a variable!
# my_name = input("Type your name: ")
# print(my_name)

#to get info type help(function) ex:

# help(input) #then press q to escape the information

# def least_diff(x1, x2, x3):
#     #body of function
#     '''
#     Return the smallest difference
#     '''
#     diff_1 = abs(x1-x2) #abs = absolute value
#     diff_2 = abs(x2-x3)
#     diff_3= abs(x1-x3)
#     return min(diff_1, diff_2, diff_3)

# #call leastdiff

# least_diff_a = least_diff(20,60,6)

# print(least_diff_a)

#in python, we can pass functions as other aparemeters for other functions

#ex:

# def process(alteringFunction, text):
#     newText = alteringFunction(text)
#     return newText

# def textToUpper(text):
#     return text.upper() #text.upper is inubuilt an turns text to uppcercase

# def textToLower(text):
#     return text.lower()


# # print(textToLower("SABINE"))
# # print(textToUpper ("banana"))

# print(process(textToLower,"cantAloupe"))

# #if/else  statements
# var_one = 2
# var_two = 2

# if(var_one > var_two):
#     print("var one in greater")
# else: #else needs to be in the same position as the if
#     print("var_two is greater")
# if(var_one > var_two):
#     print("var one is greater")
# elif (var_one == var_two):
#     print("they are the same")

# for loop

num = 5

for i in range(0,num,2): #default going from 0-5
    print(i)

    #range(start, endnumber, step) midddle can be a complex expression

#in finds if one string is in another
#len finds the length of the string you gave it
#startswith() and endswith() finds if a strong starts and ends wih the given thing
#find() finds it in any place in the string

#count() tells how many times its been found in the string

#strings in python cannot chnge, must return a copy to change it

#replace takes two arguments, the string and the string to replace and replaces it!