
# #accessing more complicated dictionaries


# shopping = {'vegetables': ['spinach', 'carrots', 'brocolli', 'lettuce'],
#              'fruit': ['cantaloupe', 'bananas'], 
#              'bakery': ['bagels','rye bread']}


# #will return the list of fruit, antaloupe and bananas
# print(shopping['fruit'])
# # go through it with a for loop
# for item in shopping['fruit'] :
#     print(item)
#     #dictionaries vs, lists, one needs a key vs the other doesn't
#     #accessing a dictionary is similar to accessing a JSON file!

# #access spinach
# print(shopping['vegetables'][0])


# #let's make it worse!!

# shopping_rev = {'vegetables': {'green': ['spinach', 'brocolli', 'lettuce'],
#                            'orange':['carrots'],
#                             },
#              'fruit': ['cantaloupe', 'bananas'], 
#              'bakery': ['bagels','rye bread']}

# print(shopping_rev['vegetables'['green']][0])

# #adding to a dictionary
# shopping_rev['cleaning_items']= ['dish soap', 'sponges']

#hierarchy matters! Not the order of the keys

#-----------WEB APIs Notes---------

#URL: need to know the URL of your chosen API
#in a URL, you can notice key,value strings in the URL, you can pass variables in a URL!
#The API documentation is super important
#JSON IS THE STANDARD FOR DISTRUBITNG DATA ACROSS THE INTERNET <--- oops, caps



#----API keys----
#When you sign up, you'll get a personal API key which you'll have to use every time you make a request
#requests in Python:
#Python actually has a library of web requests

#--see the weather xercise file!!!!



