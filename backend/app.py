from flask import Flask
from flask_restful import Resource, Api
from apis.helloworld import Helloworld

app = Flask(__name__)

api = Api(app)



api.add_resource(Helloworld, '/')

if __name__ == '__main__':

	app.run(debug=True)