#!/usr/bin/python



import requests

#Import rich's library in order to crate tables and colored texts
from rich.console import Console
from rich.table import Table

console = Console()

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



#Launches the page with the selection of entries

entryList = ("1985, October 1st", "1985, October 5th","1985, October 15th","1985, October 29th", "1985, October 31st",)
def launchIntro():
    for entry in entryList:
        console.print(entry, style = "green")
    entrySelect = input()
    if entrySelect == "october 1st":
        October1st()
    if entrySelect == "october 5th":
        October5th()
    if entrySelect == "october 15th":
        October15th()
    if entrySelect == "october 19th":
        October19th()
    if entrySelect == "october 31st":
        October31st()



#entries 

def October1st():
    entry = ["1985, October 1st", "It is the first of October, the days are getting cooler. But it makes no difference to me. In the lab, the temperature remains steady.","The machines hum, as steadily as my climate-controlled surroundings.", "Signed,","Dr.A"]
    for line in entry:
        console.print(line, style = "green")
    action = input()
    if action == "back":
        launchIntro()

def October5th():
    #draws the table of coordinates
    table = Table(title='Coordinates')
    table.add_column("Lat", justify = "center", style = "green")
    table.add_column("Long", justify = "center", style = "green")
    console.print("Coordinates. Every station has a coordinate", style = "green")
    # x = item["station"]["geo"][0]
    # y = item["station"]["geo"][1]
     # prints the rest of the text
    for item in responseData:
        table.add_row(""f'{item["station"]["geo"][0]}' ,f'{item["station"]["geo"][1]}')
        console.print(table)
    console.print("I have collected the coordinates of other labs. So many stations, yet none of them answer. I gave each one a call, and sent out messages through the interconnected messaging system that was set up through the computers. But something must be wrong, as is often the case with new tech. My fingers grow stiffer and colder the longer I am here.","I'll contact the second half in the morning.", style = "green")
    action = input()
    if action == "back":
        launchIntro()

def October15th():
    console.print("To view the entry of October 15th, please enter a value between 0 and 20", style = "green")
    number = input()
    console.print(".", style = "green")
    dataentry = responseData[(int(number))]["station"]["name"]
    # datastring = f"{dataentry}"
    entry = ["1985, October 15th", f"{dataentry}", "Signed,","Dr.A"]
    for line in entry:
         console.print(line, style = "green")
    #post script
    if ("Saint" in dataentry) or ("St" in dataentry):
        console.print("P.S :angel:")
    else:
       console.print("no Saint")
    action = input()
    if action == "back":
        launchIntro()


def October19th():
    print("This is the entry for October 19th")
    action = input()
    if action == "back":
        launchIntro()

def October31st():
    print("This is the entry for October 31st")


def launchGuide():
    console.print("User detected, What's your name?", style = "green")
    username = input()
    console.print(f"Hello, {username}, access granted, although you are not Dr.A.", style = "green")
    launchIntro()
  

#Password prompt
console.print("Welcome to Dr A's research Journal, please type in the password. to continue" , ":heart:", style ="green on black")
passWord = input()
if passWord == "terminal":
    launchGuide()



# username = input()
# # print(f"Hello, {username}, what's the weather like outside?")
# if input() == "sunny":
#     print(f"Ilove sunny days do you, {username}")
# if input()== "cloudy":
#     print(":(")
