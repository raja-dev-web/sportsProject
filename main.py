from flask import Flask


app = Flask(__name__)


def index():
    return "Welcome to our Website"

