from flask import Flask
from flask_restful import Resource, Api
from apis.helloworld import Helloworld
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
api = Api(app)



api.add_resource(Helloworld, '/')

if __name__ == '__main__':

	app.run(host='0.0.0.0',debug=True)