#setup

import requests
#Assigning a variable to the API Key
token = "5f86f11d709364014dc941832b05e60a2ce498d3"
#Point it to the world air quality index
url = "https://api.waqi.info/search/"
#Sets 'montreal' to 'keyword' to indicate Montreal as the station.
response = requests.get(url, params={"token": token, "keyword": "montreal"})
#Give back the information as a JSON format
results = response.json()
#Prints the result in the terminal
print(results)

#getting the TYPE of RESULTS
print(type(results))
#The TYPE of RESULTS is 'dict' or 'dictionary'

#Getting the KEYS of RESULTS
print(results.keys())
#The keys are 'status' and 'data'

#Code of data field and storing it

responseData = results["data"]
print(type(responseData))
#the 'type' of 'responseData' is 'list'
for item in responseData:
    print(item)
#represents the station, time, timezone, name, coordinates, country
    print(type(item))
    
    #'type' of 'item' is dictonary'
    print(item.keys())
    #the keys associated with 'item' are uid, aqi, time, station
    print(item["station"]["name"])
    #
    print("lat:"f'{item["station"]["geo"][0]}' , "long:" f'{item["station"]["geo"][1]}')
    #Sainte-Anne-de-Bellevue, Montreal, Canada
    #[45.426509, -73.928944]
    print("Aqi:"f"{item["aqi"]}", "UID:" f"{item["uid"]}")


    url_feed = "https://api.waqi.info/feed/@5468"
response_feed = requests.get(url_feed, params={"token": token})
results_feed = response_feed.json()
print(results_feed)

response_data_feed = results_feed["data"]
print(type(response_data_feed))
#the class of response_data_feed is a dictionary

for i in response_data_feed:
    print(i)
#result: 
# aqi
# idx
# attributions
# city
# dominentpol
# iaqi
# time
# forecast
# debug

print(response_data_feed["aqi"]) #answer:The AQI represents the air quality index
print(response_data_feed["dominentpol"]) #answer: The dominent pol is the dominent polutant

dominentpolutant = response_data_feed["dominentpol"]
Airquality = response_data_feed["aqi"]

print(response_data_feed["iaqi"]['co']['v'])
#using iaqi to acces the value of the dominent polutant
iaqi =response_data_feed['iaqi']
polutantvalue = iaqi[dominentpolutant]['v']
print(polutantvalue)
#the answer is 30, which corresponds to the AQI field

# So - now that you can access the feed for a specific station in a particular city, and from that feed you can access the value of its dominant pollutant.... : explain theoretically (you do not have to write the code) what the process would be to access the value of the dominant pollutant value from different cities ...

# Firstly, you would have to access the "station" by first in "response" using the "get" function and selecting the city you want following the API's formatting. With the name of the city, you'd need to select a station by getting its key. Once the station is accessed, we can finds the value of the dominant polutant by using the stored information in  polutantvalue = iaqi[dominentpolutant]['v']. Once the value of the polutant is accessed, it will be stored into polutantvalue and can be printed. 