#!/usr/bin/python



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
# print(results)

## Beginning of the experience

# print(results.keys())
responseData = results["data"]
# print(type(responseData))

print(responseData)

# for item in responseData:
#     print(item["station"])




# print("Welcome, please type in your name")
# username = input()
# print(f"Hello, {username}, what's the weather like outside?")
# if input() == "sunny":
#     print(f"Ilove sunny days do you, {username}")
# if input()== "cloudy":
#     print(":(")
