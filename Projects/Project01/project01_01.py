#!/usr/bin/python



import requests

# from colorama import just_fix_windows_console
# just_fix_windows_console()
#Assigning a variable to the API Key
token = "5f86f11d709364014dc941832b05e60a2ce498d3"
#Point it to the world air quality index
url = "https://api.waqi.info/search/"
#Sets 'montreal' to 'keyword' to indicate Montreal as the station.
response = requests.get(url, params={"token": token, "keyword": "montreal"})
#Give back the information as a JSON format
results = response.json()
#Prints the result in the terminal
# print(results)

## Beginning of the experience

# print(results.keys())
responseData = results["data"]
# print(type(responseData))

# print(responseData)

# for item in responseData:
#     # print("lat:"f'{item["station"]["geo"][0]}' , "long:" f'{item["station"]["geo"][1]}')
#     #  print("Place:"f'{item["station"]["name"][0]}' , "City:" f'{item["station"]["name"][1]}')
#     print("Place:"f'{item["station"]["name"]}' , "City:" f'{item["station"]["name"]}')
     

# print(Fore.RED + 'some red text')
# print(Back.GREEN + 'and with a green background')
# print(Style.DIM + 'and in dim text')
# print(Style.RESET_ALL)
# print('back to normal now')

#Launches the page with the selection of entries





entryList = ["1985, October 1st", "1985, October 5th", "1985, October 31st"]
def launchIntro():
    for entry in entryList:
        print(entry)
    entrySelect = input()
    if entrySelect == "October 1st":
        October1st()
    if entrySelect == "October 5th":
        October5th()
    if entrySelect == "October 31st":
        October31st()

def October1st():
    print("This is the entry for October 1st")
    action = input()
    if action == "back":
        launchIntro()

def October5th():
    print("I've taken down the coordinates of ... as such:")
    for item in responseData:
        print("lat:"f'{item["station"]["geo"][0]}' , "long:" f'{item["station"]["geo"][1]}')   
    # print("This is the entry for October 5th")

def October31st():
    print("This is the entry for October 31st")

#Password prompt
print("Welcome, please type in the password.")
passWord = input()
if passWord == "terminal":
    launchIntro()


# username = input()
# # print(f"Hello, {username}, what's the weather like outside?")
# if input() == "sunny":
#     print(f"Ilove sunny days do you, {username}")
# if input()== "cloudy":
#     print(":(")
