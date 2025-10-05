from flask import Flask,render_template
app = Flask(__name__)
@app.route("/")
def index():
 return render_template("pineapples.html")
#pages are not immediately visible just because a page exists

app.run(debug=True)


@app.route ("</another/<dynamicVar>")
def another_route(dynamicVar):
    return f"<h2> This is the 100th letter <span style = 'color:orange'> {dynamicVar[99]}<h2>"

@app.route ("</another/<dynamicVar>")
def three():
    someNewVar = "strawberries"
    somenewlist = ["one", "two","three"]
    someNewDict = 
    return render_template("pineapples_three.html", 
                           someHTMLVar = someNewVar,
                            someHTMLList = somenewlist
                            someHTMLDict = someNewDict)

@app.route("/four")
def four():
   a_new_list = [1,2,3,4,5]
   b_new_list = ["yellow","oramge","fuscia","navy","green"]
   return render_template("pineapples_four.html",
                          d_HTML_list = b_new_list,
                          a_HTML_list = a_new_list)
   
#inject the variables where you want by putting them in your html (see pineapples three)



