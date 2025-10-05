
#This is the weater API test done in class

#First acivate your enviroment

#Then, put in the commands in the terminal
#deactivate current environment
# copy this: conda create --name webAPisenv python=3.13
#conda activate webAPisenv
#pip install requests


#imported code from Sabine:

#import the lib
import requests 
 
#city arg
city = "Montreal" 
 
#my api key -> you should add yours
api_key = "2ba267fc5ab5b4c99201b8efab509d99" #given upon signing up
 
#url to get results with the city added
url_with_city ="http://api.openweathermap.org/data/2.5/weather?q=" +city #found on the API website doc
 
#url with the api key appeneded
url_to_send = url_with_city + "&APPID=" + api_key 
 
#make the request
# response = requests.get(url_to_send) 
bare_url = 'http://api.openweathermap.org/data/2.5/weather'
response = requests.get(bare_url , params={"q": city, "APPID":api_key }) #wil make query string automatically

 
#get the response as json

data = response.json() 
 
print
print(data)
gives you a whole lot of information back! How to extract the data....
what is this data type?
print(type(data)) #dictionary
print(data.keys()) #gives you all the keys (top level)
print(data["weather"]) #gives you another dictionary...?
# print(type(data['weather'])) #it's a list!
print(data["weather"][0]) #the weather today!

print()

# weather_item = data["weather"][0]
# for item in weather_item:
#     print weather_item(item)
    #will bring out the id, main weather, description and the icon!ß



