from flask import Flask, jsonify, request

from .entities.entity import Session, engine, Base
from .entities.product import Exam, ExamSchema

# creating the Flask application
app = Flask(__name__)