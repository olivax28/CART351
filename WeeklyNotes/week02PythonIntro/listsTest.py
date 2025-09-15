#!/usr/bin/python3

fruit = ["apples","bananas","carrots"]
mixed_list = [1,3,"string", True, ["a","b","c"]] #a list of mixed types

for item in fruit:
    print(item)

# testString = "test one two three"
# for element in testString:
#     print(element)


#add to a list

newItems= [] #empty list
newItems.append("hello")
 #adding to a list with a for loop
for i in range(2,10,2):
    newItems.append(i)

print(newItems)


#access index of a list

print(newItems[0])
print(len(newItems))
lengthOfList = len(newItems)
print(newItems[lengthOfList-1])

newItems.insert(2,"New item at position 2")
anotherList = ["a", "b","c"]

#extending items with a new list
# newItems += anotherList
# #can be written as
# newItems.extend(anotherList)
# print(newItems)

thirdList = newItems + newItems + anotherList

print(thirdList)
print(thirdList.index("a")) #finds first instance and gives the index of the item

# thirdList.remove("a")

# print(thirdList) #removes first instance of "a"

# thirdList.pop(1) #specify index, default pop from end, removes an item
# print(thirdList)


# joinOn = "*"
# newStringList =["apples","oranges","pears"]
# #convert frm list to string
# listasString = joinOn.join(newStringList)
# print(listasString)
# #convert from string to list
# newSplitList = listasString.split("*")
# print(newSplitList)


aList = [1,2,3,4,5,"a","b","c"]
print(aList[1:4]) #second element up to thr 4th one
print(aList[:]) #whole list
print(aList[2:]) #3rd item to end
print(aList[:4]) #1st item to end
print(aList[1:8:2]) #print every second item from 2nd item to the 9th

print(aList[-1]) #gives last item in the list, can go through an array backwards

