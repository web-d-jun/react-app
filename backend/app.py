from api import app, db
from ariadne import (
    load_schema_from_path,
    make_executable_schema,
    graphql_sync,
    snake_case_fallback_resolvers,
    ObjectType,
)
from ariadne.constants import PLAYGROUND_HTML
from api import app
from api.queries import listPosts_resolver, getPost_resolver

from apis.helloworld import Helloworld
from flask import request, jsonify
from flask_restful import Resource, Api

from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from dotenv import load_dotenv

# Querying a single post by id
# Writing our first Resolver
# https://www.apollographql.com/blog/graphql/python/complete-api-guide/
load_dotenv()


api = Api(app)

# api.add_resource(Helloworld, "/")

query = ObjectType("Query")
query.set_field("listPosts", listPosts_resolver)
query.set_field("getPost", getPost_resolver)

type_defs = load_schema_from_path("schema.graphql")
schema = make_executable_schema(type_defs, query, snake_case_fallback_resolvers)


@app.route("/graphql", methods=["GET"])
def graphql_playground():
    return PLAYGROUND_HTML, 200


@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()
    success, result = graphql_sync(schema, data, context_value=request, debug=app.debug)
    status_code = 200 if success else 400
    return jsonify(result), status_code


# current_date = datetime.today().date()
# new_post = Post(title="A new morning", description="A new morning details", created_at=current_date)
# db.session.add(new_post)
# db.session.commit()


if __name__ == "__main__":

    app.run(port=5000, debug=True)
