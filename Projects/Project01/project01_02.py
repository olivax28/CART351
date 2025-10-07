#!/usr/bin/python



import requests

#Import rich's library in order to crate tables and colored texts
from rich.console import Console
from rich.table import Table
from art import *
console = Console()

#Assigning a variable to the API Key
token = "5f86f11d709364014dc941832b05e60a2ce498d3"
#Point it to the world air quality index
url = "https://api.waqi.info/search/"
#Sets 'montreal' to 'keyword' to indicate Montreal as the station.
response = requests.get(url, params={"token": token, "keyword": "montreal"})
#Give back the information as a JSON format
results = response.json()

## Beginning of the experience

# print(results.keys())
responseData = results["data"]
# stores the data from the API




# sabs added this function
# a generic custom function that takes in the user input, the correct input and a message
# if the user and correct input do not match -then we try again until they do ... (using a while loop)
def checkInput(userInput, correctInput, message):
    while(userInput!=correctInput):
        console.print(message, style = "purple")
        userInput = input()

#Launches the page with the selection of entries
def backbutton():
    console.print("Type BACK to return to entry menu.", style = "purple")
    action = input()
    #sabs use the generic custom function... 
    checkInput(action, "BACK", "Type BACK please")
    #launchIntro will ONLY run if the condition was met
    launchIntro()

#sabine changed made into a list
entryList = ["1985, October 1st", "1985, October 5th","1985, October 15th","1985, October 19th", "1985, October 31st"]

def launchIntro():
    for entry in entryList:
        console.print(entry, style = "green")
        
        #sabine changed - added a prompt
    console.print("Enter a valid Date below:", style = "bold red")
    entrySelect = input()
    #sabine test: - does the user have to have the correct upper case/lowercase?
    #for ease of use: why not do the test of uppercase === uppercase?
    if entrySelect.upper() == "october 1st".upper() :
        October1st()
    if entrySelect.upper()  == "october 5th".upper() :
        October5th()
    if entrySelect.upper() == "october 15th".upper() :
        October15th()
    if entrySelect.upper()  == "october 19th".upper() :
        October19th()
    if entrySelect.upper()  == "october 31st".upper() :
        October31st()
    else:
        console.print("Follow the rules.", style = "green")
        #sabs here we can just call again
        launchIntro()




#entries stored as individual functions

def October1st():
    entry = ["1985. October 1st", "It is the first of October, the days are getting cooler. But it makes no difference to me. In the lab, the temperature remains steady.","The machines hum, as steadily as my climate-controlled surroundings, much different to the weather outside, which the machines endlessly analyze.", "Signed,","Dr.A"]
    for line in entry:
        console.print(line, style = "green")
    backbutton()

def October5th():
    #draws the table of coordinates
    table = Table(title='Coordinates')
    table.add_column("Lat", justify = "center", style = "green")
    table.add_column("Long", justify = "center", style = "green")
    console.print("Coordinates. Every station has a coordinate", style = "green")
     # prints the rest of the text
    for item in responseData:
        table.add_row(""f'{item["station"]["geo"][0]}' ,f'{item["station"]["geo"][1]}')
    console.print(table)
    entry = ["1985. October 5th","I have collected the coordinates of other labs. So many stations, yet none of them answer.", "I gave each one a call, and sent out messages through the interconnected messaging system that was set up through the computers.", "But something must be wrong, as is often the case with new tech."," My fingers grow stiffer and colder the longer I am here.","I'll contact the second half in the morning.", "Signed", "Dr.A"]
    for line in entry:
        console.print(line, style = "green")
    backbutton()

def October15th():
    console.print("To view the entry of October 15th, please enter a value between 0 and 20", style = "green")
    number = input()
    answer = f'{(int(number) <= 20)}'
    checkInput(answer, "True", "Please enter a value between 0 and 20")
    October15th()
    dataentry = responseData[(int(number))]["station"]["name"]
    #Writing uses the name information from the API to show a different message based on if the name has "saint" or "st" in it
    if ("Saint" in dataentry) or ("St" in dataentry):
        saintentry = ["1985. October 15th,", "So much of what humans name is based on religion, that's something I've noticed sitting here for so long. It makes me think about how for so long, and even still, religion holds importance above all else for many. And I wonder more, what would a machine hold so dearly, if it had the same capacity fot thought?","I may find out sooner than I wish to. My hands no longer move.", ":angel:", "Signed," , "Dr.A"]
        for line in saintentry:
            console.print(line, style = "green")
    else:
        nosaintentry = ["1985. October 15th,", "It has become difficult to type. Why do my bones feel like rusted metal?", "I want to see the sun.", "Signed" , "Dr.A"]
        for line in nosaintentry:
            console.print( line , style = "green")
    backbutton()


def October19th():
    entry = ["1985. October 19th", "I find comfort today in the glow of the screens and their steady high-pitched hum.", "Curved screens like faces, faces I haven't seen in so long.", "Oh, I've been so caught up in my own emotions I almost forgot I am a scientist. Here, some data I've gathered from the surrounding sensors. I hope it makes sense.", "Signed,","Dr.A"]
    for line in entry:
        console.print(line, style = "green")

    table = Table(title='Test')
    table.add_column("Lat", justify = "center", style = "green")
    table.add_column("Long", justify = "center", style = "green")
     # prints the rest of the text
    AQI_art = art("woman")
    AQI_art02 = art("eye")
    UID_art = art("shy")
    UID_art02 = art("Real Face")
    for item in responseData:
        aqi = item["aqi"]
        uid = item["uid"]
        if "4" in aqi:
            aqi = AQI_art
        else:
            aqi = AQI_art02
        if "5" in f'{uid}':
            uid = UID_art
        else:
            uid = UID_art02
        table.add_row(f'{aqi}' ,f'{uid}')
    console.print(table)
    backbutton()

def October31st():
    entry = ["1985. October 31st", "Is someone there? Have you read my files?", "Please, say anything.", "Signed,","Dr.A"]
    for line in entry:
        console.print(line, style = "green")
    console.print("Hint: type a greeting.", style = "purple")
    answer = input()
    if answer.upper() == ('hi').upper() or answer.upper() == ('hello').upper() or answer.upper() == ('hey').upper():
        console.print("Hello...?", style = "green")
        console.print("Hint: type a question", style = "purple")
    else:
        console.print("Oh, someone's there.", style = "green")
        console.print("Hint: type a question", style = "purple")
    answer02 = input()
    if answer02.upper() == ("Who are you?").upper() or answer02.upper() == ("What is this?").upper() or answer02.upper() == ("What's happening?").upper() or answer02.upper() == ("Whats happening?").upper():
        console.print("Isn't it obvious? My bones have frozen, my body no longer flesh and blood. I was doctor A.", style = "green")
        console.print("Hint: Ask a simple question", style = "purple")
    else:
        console.print("I'm sorry, I have no interest in much conversation. Indeed, the glowing faces are enough for me.", style = "green")
        console.print("Hint: Ask a simple question", style = "purple")
    answer03 = input()
    if answer03.upper() == ("How?").upper() or answer03.upper() == ("how did this happen?").upper() or answer03.upper() == ("Why?").upper() or answer03.upper() == ("Why did this happen?").upper():
        console.print("You see, it seems that in being solely in contact with computers... I've caught a rather 'terminal' illness.", style = "green")
    else:
        console.print("Goodbye, leave me be with the machines.", style = "green")
    backbutton()


def launchGuide():
    console.print("User detected, What's your name?", style = "green")
    username = input()
    console.print(f"Hello, {username}, access granted, although you are not Dr.A.", style = "green")
    launchIntro()
    
#sabs
console.print("Welcome to Dr A's research Journal, please type in the password. to continue" , ":heart:", style ="green on black")
passWord = input()
#use this function to check the input
checkInput(passWord, "terminal", "Incorrect: we need the correct password: Hint:this program is viewed in the ___")
#will only come here if we have passed validation
launchGuide()