from flask import Flask, jsonify, render_template
""" from flask_cors import CORS """
from funcs import testi
from funcs import duuni
from funcs import oikotie
from funcs import monster
import os

# configuration
DEBUG = True

# instantiate the app
template_dir = "./dist"
static_dir = "./dist/static"
print(static_dir)
application = Flask(__name__, static_folder="./dist/static",
                    template_folder=template_dir)
application.config.from_object(__name__)

# enable CORS
""" CORS(application, resources={r'/*': {'origins': '*'}}) """


# sanity check route
@application.route('/', methods=['GET'])
def home():
    return render_template("index.html")


@application.route('/job/<param>/<param2>', methods=['GET'])
def getJobs(param, param2):
    job = param.lower()
    location = param2.lower()
    if location == "empty":
        location = ""
    jobs = duuni.duuniReq(job, location) + oikotie.oikotieReq(job,
                                                              location) + monster.monsterReq(job, location)

    return jsonify(jobs)


if __name__ == '__main__':
    application.run()
