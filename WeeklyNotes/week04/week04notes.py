#introduction to flask
#What is it? Python-end web framework and simplifies web development
#Will now be using flask server, not live server 
#create a new environment for use of flask
#pip install flask

#first
from flask import Flask
app = Flask(__name__) #two underscores indicate a python key term! This is a preset variable, sets a home name, sets root of the project

@app.route("/") #like an event, when the html page makes a request for a default path, the index function runs automatically
def index():
    return '<h1> Hello CART351 <h1>'

app.run()
#decoration, takes index function and returns with extra functionality (index function) app.route 'decorated' it
#when you make a change, stop the app from running and restart it

@app.route("/about")
#can name this anything ^^^
def about():
    return '<h1 style = "color:purple">About CART 351</h1>'
@app.route("/user/<name>")
#<> indicates a variable
def user_profile(name):
    return f"<h2> this is ,span style = 'color:orange'>{name}'s</span> profile page <h2>"

@app.route ("</another/<dynamicVar>")
def another_route(dynamicVar):
    return f"<h2> This is the 100th letter <span style = 'color:orange'> {dynamicVar[99]}<h2>"
#to debug, turn on debug mode
#app.run(debug = true), rerunning will activate debug, recieve a pin number
#in the web, you can use the pin to access the debugging page




