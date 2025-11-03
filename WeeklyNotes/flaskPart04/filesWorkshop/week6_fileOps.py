import json
# rainbowFile = open("files/rainbow.txt","r")
# # "r" opens the file for reading
# # call the read function
# # number is numbr of bites read, dont specify to read whole file
# out = rainbowFile.read(4)
# rainbowFile.seek(0) 
# # ^^starts from the beginning
# print(out)
# # close a file after using it
# rainbowFile.close()

# rainbowFile = open("files/rainbow.txt","r")
# # read one line at a time
# outline = rainbowFile.readline()
# # reads all line
# outlines = rainbowFile.readline()
# print(outline)
# print(outlines)

# writing to a file
# animalList = []
# sampleFile = open("files/sample_text.txt","w")
# for i in range(3):
#     a_name = input("enter animal: ")
#     animalList.append(a_name="\n")
#     sampleFile.write(a_name)
#     sampleFile.write("\n")    
# sampleFile.writelines(animalList)
# sampleFile.close()

# sampleFile_a = open ("files/sample_text.txt", "a")
# nameList = []
# for i in range(3):
#     name = input("type name ")
#     nameList.append(name+"\n")
# sampleFile_a.writelines(nameList)
# sampleFile_a.close()

# Read from file and parse JSON
# jsonFile = open("files/test.json", "r")
# data = json.load(jsonFile)
# print(data)
# print(type(data)) # a list


# json_str = '{"name":"Sabs", "fav_col":"red", "fav_city":"montreal"}'
# data_2 = json.loads(json_str) 
# print(data_2)
# print(type(data_2))#converts to a dict


# data_toSave = {"name":"mandy", "fav_col":"blue", "fav_city":"winnipeg"}
# #convert dictionary to str
# data_s = json.dumps(data_toSave, indent=4)
# # indent value = JSON formatting
# #open or create if non existent
# filetoOpen = open("files/new_sample.json","w")
# filetoOpen.write(data_s)

# dump doesnt require converting to a string first
# data_toSave_2 = {"name":"mandy", "fav_col":"blue", "fav_city":"winnipeg"}
# filetoOpen = open("files/new_sample.json","w")
# json.dump(data_toSave_2, filetoOpen, indent=4)
# filetoOpen.close
# if we append to a file, it'll get out of json format, you can't have two json objects in one file!
# we need to read the content, store it as a dictionary, append to python data structure and rewrite everything out!


jsonFile = open("files/new_sample_b.json", "r+")
# r+ opens for reading and writing
data = json.load(jsonFile)
print(data['fav_city'])
print(type(data['fav_city']))
# #go to beginning of file
jsonFile.seek(0)
data['fav_city'].append("another element")
data["newKey"] = 1234
#output to the file
json.dump(data,jsonFile, indent =4)

