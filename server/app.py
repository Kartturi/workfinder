from flask import Flask, jsonify
from flask_cors import CORS
from funcs import testi
from funcs import duuni
from funcs import oikotie

# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})


# sanity check route
@app.route('/', methods=['GET'])
def home():
    return testi.testaus()


@app.route('/job/<param>/<param2>', methods=['GET'])
def getJobs(param, param2):
    job = param.lower()
    location = param2.lower()
    if location == "empty":
        location = ""
    jobs = [
         duuni.duuniReq(job,location),
         oikotie.oikotieReq(job,location)
    ]
    return jsonify(jobs)

if __name__ == '__main__':
    app.run()