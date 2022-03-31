import os
import psycopg2
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, supports_credentials=True)

def get_db_connection():
    conn = psycopg2.connect(
        host = os.environ['RDS_HOSTNAME'],
        user = os.environ['RDS_USERNAME'],
        password = os.environ['RDS_PASSWORD'],
        dbname = 'postgres',
        port = 5432
    )
    return conn

#users endpoint
@app.route('/users', methods=["POST", "GET"])
@cross_origin()
def users():
    if request.method == 'POST':
        params = request.get_json()
        email, first_name, last_name, role = params['email'].strip(), params['firstName'].strip(), params['lastName'].strip(), params['role'].strip()
        print(email)
        conn = get_db_connection()
        cur = conn.cursor()
        #insert into RDS DATABASE -> CHECK TABLEPLUS 
        cur.execute('INSERT INTO users (email, first_name, last_name, role)'
            'VALUES (%s, %s, %s, %s)',
            (email,
             first_name,
             last_name,
             role)
        )
        conn.commit()
        cur.close()
        conn.close()
        return 'welcome %s' % email
    else:
        return 'hi!'

@app.route('/getusers', methods=["POST", "GET"])
@cross_origin()
def get_users():
    if request.method == 'POST':
        params = request.get_json()
        email = params['email'].strip()
        print(email)
        conn = get_db_connection()
        cur = conn.cursor()
        #quer from RDS DATABASE -> CHECK TABLEPLUS 
        cur.execute(
            """
            SELECT 
            email, 
            first_name, 
            last_name, 
            role 
            FROM users 
            WHERE email = %s;
            """,
            [email,]
        )
        conn.commit()
        cur.close()
        conn.close()
        result = cur.fetchone()
        print(result)
        return result
    else:
        return 'hi!'

#answers endpoint
@app.route('/answers', methods=["POST", "GET"])
@cross_origin()
def answers():
    if request.method == 'POST':
        params = request.get_json()
        email, id, answer = params['email'].strip(), params['id'].strip(), params['answer'].strip()
        conn = get_db_connection()
        cur = conn.cursor()
        #insert into RDS DATABASE -> CHECK TABLEPLUS 
        cur.execute('INSERT INTO answers (email, id, answer)'
            'VALUES (%s, %s, %s, %s)',
            (email,
             id,
             answer
            )
        )
        conn.commit()
        cur.close()
        conn.close()
        return 
    # elif request.method == 'GET':
    #     params = request.get_json()
    #     email = params['email'].strip()
    #     print(email)
    else:
        return 'hi!'
    