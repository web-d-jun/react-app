from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

import os


app = Flask(__name__)
CORS(app)
load_dotenv()

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

# @app.route('/')
# def hello():
#     return 'hello....'
