from flask_restful import Resource

class Helloworld(Resource):

	def __init__(self):

		pass

	def get(self):

		return {

			"Hello": "World!!"

		}