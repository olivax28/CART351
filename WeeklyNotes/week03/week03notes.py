class_professors = {
    "CART_253_A": 'Pippin Barr',
    "CART_211": "Brad Todd",
    "CART214": "Joanna berzowska",
    "CART_215": "Jonathan Lessard",
}

print(type(class_professors))


#an empty dictionary:

dict2 = {}

#access a dictionary for a result:

print(class_professors["CART_253_A"])
#will return PIppin Barr

#can have a variable as a ke ex:
cart_key = "CART215"
# print(class_professors[cart_key])

#want to get all the keys from a dictionary:

print(class_professors.keys())
#displays the keys as a list, means you can iterate through them!!!!
#for loop:

for key in class_professors.keys():
    print(class_professors[key])
for key in class_professors:
    #automatically gives all the 'keys' but not the values!
    print(key)
    #values
    print(class_professors[key])
    #just the values
    print(class_professors.values())
    #pairs, prints key,value pairs! a Touple!
    print(class_professors.items())

#Returns either true or false, finds out whethr it's in the dictionary or not!
    print("CART_253_A" in class_professors)

#the value at a partcular key doesn't have to be a single value...


