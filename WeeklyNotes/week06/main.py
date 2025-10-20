from flask import Flask, render_template,request
app = Flask (__name__)

#every time a reuqest is made for a page, it's a GET request
#for a form, we can aso by default make a GET request, not just a request for a URL, now a URL with Data
@app.route("/")
def default():
    return render_template("base.html")

@app.route("/index")
def index():

    
    passedDictionary={
"fav_color":"fuscia", 
"fav_veg":"cauliflower",
"fav_fruit":"kiwi",
"fav_animal":"toucan"
}
# imgPath = "../static/images/pineapple_2.jpg"
    return render_template("index.html", user={"username":"sabine"},
                           passedDictionary = passedDictionary,
                           imagePath = "pineapple_.jpg")

@app.route("/pineParent")
def pineParent():
    return render_template("pineAppleParent.html")

@app.route("/about") #make sure function name and function are the same name
def about():
    return render_template("pineAppleChild.html", dataPassedA = "test test test" )

@app.route("/addPlantData")
def addPlantData():
    return render_template("addPlantData.html")

@app.route("/thank_you")
def thank_you():
    app.logger.info(request.args)
    return render_template("thankyou.html", owner_name = request.args["o_name"])

app.run(debug = True)

