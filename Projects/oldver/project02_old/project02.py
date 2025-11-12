from flask import Flask,render_template,request
import os
import json
app = Flask(__name__)
UPLOAD_FOLDER = 'static/uploads' # Or os.path.join(app.instance_path, 'uploads')
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 # 16 MB limit

# the default route
@app.route("/")
def index():
      return render_template("index.html")

#*************************************************
# Task: CAPTURE & POST & FETCH & SAVE

@app.route("/history")
def history():
    return render_template("history.html")

@app.route("/postDataFetch")
def postDataFetch():
    app.logger.info(request.args)
    jsonFile = open("files/data.json", "r+")
    theList = json.load(jsonFile)
    theList.append(request.args)
    # clears the files
    jsonFile.truncate(0)
    # close and reoppen the file after clearig it to avoid errors
    jsonFile.close()
    jsonFile = open("files/data.json", "r+")
    # Adds the entire list back to the file
    json.dump(theList, jsonFile, indent = 4)
    jsonFile.close()
    return ({"data_received":"yes"})

# Get: all data is limited and in URL
# Post: Images, audio, sensitive data
#*************************************************
#run
app.run(debug=True)