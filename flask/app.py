import os
import psycopg2
from flask import Flask, render_template
import requests

app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(
        host = 'smart-shoppers.cqq5zn6lxhjd.us-east-1.rds.amazonaws.com',
        user = 'smartshoppers',
        password = 'Smartsho33ers2022',
        dbname = 'postgres',
        port = 5432
    )
    return conn


@app.route('/users', methods=["POST"])
def insert_user():
    conn = get_db_connection()
    cur = conn.cursor()
    print(requests.json)
    email = requests.json("email")
    print(email)
    cur.close()
    conn.close()