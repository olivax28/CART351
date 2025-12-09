from flask import Flask, render_template, request
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os
import random


load_dotenv()  # Load variables from .env and .flaskenv
db_user = os.getenv('MONGODB_USER')
db_pass = os.getenv('DATABASE_PASSWORD')
db_name = os.getenv('DATABASE_NAME')

app = Flask(__name__)
uri = f"mongodb+srv://{db_user}:{db_pass}@cluster0.8hjwugp.mongodb.net/{db_name}?retryWrites=true&w=majority"

app.config["MONGO_URI"] = uri
mongo = PyMongo(app)
print(mongo.db)
print("Pinged your deployment. You successfully connected to MongoDB!")

@app.route('/')
def index():
    return render_template("desktopMemories.html")
# for the get from p5
@app.route('/getDataFromP5')
def getDataFromP5():
    #give back request.args
    app.logger.info(request.args["name"])
    app.logger.info(request.args["memory"])
    app.logger.info(request.args["type"])
    mongo.db.userMemories.insert_one({'name':request.args["name"],'memory': request.args['memory'],'type':request.args['type']})
    
    return({"inFile":"false"})
# to send data to p5
@app.route('/senddatatoP5')
def sendDatatop5():
    results = mongo.db.userMemories.find()
  
    print(results)
    return({"data":results})

app.run(debug = True)