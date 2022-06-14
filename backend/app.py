from ariadne import load_schema_from_path, make_executable_schema, graphql_sync, snake_case_fallback_resolvers, ObjectType
from ariadne.constants import PLAYGROUND_HTML
from apis.queries import listPosts_resolver
from apis.helloworld import Helloworld
from flask import Flask, request, jsonify
from flask_restful import Resource, Api

from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from dotenv import load_dotenv
import os

#error db파일 옮겨야함 순환import 문제

#Writing our first Resolver 
#https://www.apollographql.com/blog/graphql/python/complete-api-guide/
load_dotenv()


app = Flask(__name__)
api = Api(app)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DB')
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)



query = ObjectType("Query")
query.set_field("listPosts", listPosts_resolver)

# class Post(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String)
#     description = db.Column(db.String)
#     created_at = db.Column(db.Date)
#     def to_dict(self):
#         return {
#             "id": self.id,
#             "title": self.title,
#             "description": self.description,
#             "created_at": str(self.created_at.strftime('%d-%m-%Y'))
#         }

api.add_resource(Helloworld, '/')



type_defs = load_schema_from_path("schema.graphql")
schema = make_executable_schema(
    type_defs, snake_case_fallback_resolvers
)

@app.route("/graphql", methods=["GET"])
def graphql_playground():
    return PLAYGROUND_HTML, 200

@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()
    success, result = graphql_sync(
        schema,
        data,
        context_value=request,
        debug=app.debug
    )
    status_code = 200 if success else 400
    return jsonify(result), status_code

# current_date = datetime.today().date()
# new_post = Post(title="A new morning", description="A new morning details", created_at=current_date)
# db.session.add(new_post)
# db.session.commit()


if __name__ == '__main__':

	app.run( port=5000,debug=True)

