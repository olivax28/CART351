from flask import Flask,render_template,request
import os
app = Flask(__name__)


# the default route
@app.route("/")
def index():
      return render_template("index.html")

#*************************************************

#Task: Variables and JinJa Templates
@app.route("/t1")
def t1():
      the_topic = "donuts"
      number_of_donuts = 28
      donut_data= {
      "flavours":["Regular", "Chocolate", "Blueberry", "Devil's Food"],
      "toppings": ["None","Glazed","Sugar","Powdered Sugar",
                   "Chocolate with Sprinkles","Chocolate","Maple"]
                   }
      
      icecream_flavors = ["Vanilla","Raspberry","Cherry", "Lemon"]
      return render_template("t1.html", flavours = donut_data["flavours"],toppings = donut_data["toppings"],
                             passedImg = "donut_a.png",passedImg02 = "donut_sprinkles.png", passedImgHead = "donut_pink.png", icecream = icecream_flavors, topic = the_topic, max =number_of_donuts)

#*************************************************

#Task: HTML Form get & Data 
@app.route("/t2")
def t2():
    return render_template("t2.html")

@app.route("/thank_you_t2")
def thank_you_t2():
    app.logger.info(request.args)
    string = f'{request.args["o_name"]}{request.args["o_type"]}{request.args["address"]}{request.args["o_details"]}'
    replacement = string.replace("a", "*").replace("e", "*").replace("i", "*").replace("o", "*").replace("u", "*")
    return render_template("thank_you_t2.html", OrderSummary = replacement
    )

#*************************************************

#run
app.run(debug=True)