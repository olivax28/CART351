#
# CART 351 WORK SHEET A
#
# This worksheet is also a Python program. Your task is to read the 
# task descriptions below and then write one or more Python statements to
# carry out the tasks. There's a Python "print" statement before each
# task that will display the expected output for that task; you can use
# this to ensure that your statements are correct.
#

print("------")
print("Task 1: Arithmetic expressions")
print("Expected output: 7")

# Task 1: Add parentheses to the Python statement below so that it prints
# out the number 7.

print((10 + 4)/ 2)

#------------------------------------------------------------------------

print("\n------")
print("Task 2: Expressions of inequality")
print("Expected output: True")

# Task 2: Change the operator in the statement below so that it displays
# "True" instead of "False."

print(14 < 15)

#------------------------------------------------------------------------

print("\n------")
print("Task 3: Variable assignment")
print("Expected output: 54")

# Task 3: Change the variable assignment below so that the print statement
# displays "54." (Don't change the print statement!)

a_num_variable = 17 + 37
print(a_num_variable)

#------------------------------------------------------------------------

print("\n------")
print("Task 4: Types")
print("Expected output: <class 'str'>")

# Task 4: Three variables are assigned below, all with different types.
# Replace the word "None" inside the parentheses of type() in the print
# statement below so that it prints "<class 'str'>".

x = 14
y = 17.4
z = "today is a fine day for sailing!"
print(type('str'))

#------------------------------------------------------------------------


print("\n------")
print("Task 5: Questions about strings")
print("Expected output: 51")

# Task 5: Inside the call to "print" below, write an expression that evaluates
# to the sum of the lengths of the two string variables defined below
# (first_line and second_line). Use the len() function.

first_line = "It was the best of times."
second_line = "It was the worst of times."
print(f"{first_line} {second_line}") # your code here!

#------------------------------------------------------------------------

print("\n------")
print("Task 6: Questions about strings, part 2")
print("Expected output: 25")

# Task 6: Inside the call to "print" below, write an expression that evaluates
# to the position of the word "window" in the string defined in the variable
# called "aStringSentence." Use the .find() method.

aStringSentence = "Did the cat jump out the window yesterday?"
print(aStringSentence.find("window")) # your code here!

#------------------------------------------------------------------------

print("\n------")
print("Task 7: String transformations")
print("Expected output: someone who has spent too much time")

# Task 7: Modify the print statement below so that it prints out the contents
# of the variable "partLy", but with all white space removed from
# the beginning and end of the string. Use the .strip() method.

partLy = "     someone who has spent too much time    \n".strip()
print(partLy)

#------------------------------------------------------------------------

print("\n------")
print("Task 8: String transformations, part 2")
print("Expected output: SOMEONE WHO HAS SPENT TOO MUCH TIME")

# Task 8: Using the previously defined "partLy" variable, write an
# expression inside the "print" function below that evaluates to the content of
# the string, with all whitespace removed, and with all letters converted to
# uppercase. Use the .upper() method.
partlyUpper = (f"{partLy}").upper()
print(partlyUpper) # your code here!

#------------------------------------------------------------------------

print("\n------")
print("Task 9: String indexing")
print("Expected output: p")

# Task 9: Modify the value assigned to variable "offset" below so that
# the following "print" statement displays the letter "p".

offset = 1
print("apple"[offset])

#------------------------------------------------------------------------

print("\n------")
print("Task 10: String slices")
print("Expected output: jump")

# Task 10: Modify the values assigned to variables "start" and "end"
# below so that the following "print" statement displays the word "jump".

start = 3
end = 3
aStringSentenceAgain = "Did the cat jump out the window yesterday?"
print(aStringSentenceAgain[start:end])

#------------------------------------------------------------------------

print("\n------")
print("Task 11: Integers and strings")
print("Expected output: 100")

# Task 11: Modify the statement below so that it displays the number 100.
# Do this using the int() function (hint: you need to use it twice).

print(int("19") + int("81"))
#------------------------------------------------------------------------

print("\n------")
print("Task 12: Conditions")
print("Expected output: test_var is less than 200")

# Task 12: Modify the code below to include a condition to print the statement  
# 'test_var is less than 200' for the current value of test_var. 
# Do not change the intial code, rather add to it
test_var = 90
if test_var > 200:	
	print("test_var is greater than 200!")
else: 
      print("test_var is less than 200")
#------------------------------------------------------------------------

print("\n------")
print("Task 13: Conditions II")
print("Expected output: the condition test passed")

# Task 13: Modify the if statement below to print the statement
# 'the condition test passed'. Do not change the values of the varaibles.
test_var_three = 400
test_var_two = 800
if test_var_three > 200 and test_var_two > 400:	
	print("the condition test passed")
else:
	print("the condition test not passed")
#------------------------------------------------------------------------

print("\n------")
print("Task 14: List indexes")
print("Expected output: alpha")

# Task 14: A variable "greek" is defined below. The value of this variable
# is of type list. Change the expression below the variable definition so
# that it prints "alpha" (instead of "beta").

greek = ["alpha", "beta", "gamma", "delta", "epsilon"]
print(greek[0])

#------------------------------------------------------------------------

print("\n------")
print("Task 15: List slices")
print("Expected output: ['beta', 'gamma', 'delta']")

# Task 15: Change the values of the variables "start" and "finish" below so that
# the print statement displays the second through fourth items in the list
# "greek" (defined above).

start = 1
finish = 4
print(greek[start:finish])

#------------------------------------------------------------------------

print("\n------")
print("Task 16: List slices, part 2")
print("Expected output: ['delta', 'epsilon']")

# Task 16: Change the value of the variable "foo" below so that the print
# statement displays the last two members of the list "greek" (defined above).
# Use a negative number for "foo".

foo = -2
print(greek[foo:])

#------------------------------------------------------------------------

print("\n------")
print("Task 17: List operations")
print("Expected output: True")

# Task 17: Change the value of the variable "letter_to_look_for' below so
# that the print statement displays "True."

vegetables= ["aubergines", "carrots", "turnips", "fiddleheads", "artichokes"]
word_to_look_for = "carrots"
print(word_to_look_for in vegetables)

#------------------------------------------------------------------------

print("\n------")
print("Task 18: List operations, part 2")
print("Expected output: ['artichokes', 'aubergines', 'carrots', 'fiddleheads', 'turnips']")

# Task 18: Change the expression below so that the print statement displays
# the list "vegetables" (defined above) in alphabetical order. (Use the "sort"
# function.
vegetables.sort()
print(f"{vegetables}")


#------------------------------------------------------------------------

print("\n------")
print("Task 19: Modifying lists")
print("Expected output: ['artichokes', 'aubergines', 'carrots', 'fiddleheads', 'turnips','radishes']")

# Task 19: Write a Python statement that adds a new item, "radishes", to the
# list "vegetables" (defined above). The print statement should display the updated
# list.

# write your statement here
rad = "radishes"
vegetables.append(rad)
print(vegetables)

#------------------------------------------------------------------------

print("\n------")
print("Task 20: Loops")
print("Expected output:")
print("  artichokes")
print("  aubergines")
print("  carrots")
print("  fiddleheads")
print("  turnips")
print("  radishes")

# Task 20: Write a "for" loop below that prints out each item in the list
# "vegetables" (defined above). (The list should contain the item that you
# added to the list in task 17.)

# veglength = (len(vegetables))
for veg in vegetables:
	print(veg)




#------------------------------------------------------------------------

print("\n------")
print("Task 21: Loops, part 2")
print("Expected output:")
print("  Artichokes")
print("  Aubergines")
print("  Carrots")
print("  Fiddleheads")
print("  Turnips")
print("  Radishes")

for veg in vegetables:
	print((f"{veg}").title())


# Task 21: Write a "for" loop below that prints out each item in the list
# "vegetables" (defined above), but with the first letter of each item capitalized.
# (The list should contain the item that you added to the list in task 17.)




#------------------------------------------------------------------------

print("\n------")
print("Task 22: Split and join")
print("Expected output:")
print("  25")
print("  9-18-25")

# Task 22: Modify the variable "separator" below so that the first print
# statement displays "25". Modify the variable "glue" so that the second print
# statement displays "9-18-25".


separator = "?"
glue = "?"
parts = "9/18/25".split(separator)
print(parts[-1])
print(glue.join(parts))

#------------------------------------------------------------------------

print("\n------")
print("Task 23: All together now")
print("Expected output: alpha, beta, gamma, delta, epsilon, zeta, eta, theta")

# Task 23: Make three changes on the Python code below, as follows: (1) replace
# [] with an expression that evaluates to a list with two items, "eta" and
# "theta" (using the .split() method). (2) Replace the word "pass" with a
# Python statement, so that the "for" loop has the effect of adding two new
# items to the list "greek" - recall it was defined above - but we redefine it below:). 
# (Use the .append() method.) (3) Change the value
# of the variable "glue" so that the desired output is displayed.

greek = ["alpha", "beta", "gamma", "delta", "epsilon","zeta"]
new_letters = "eta theta"
new_letters_list = [] # <-- replace this

for letter_name in new_letters_list:
	pass # <-- and replace this

glue = "?" # <-- and replace this

print(glue.join(greek))