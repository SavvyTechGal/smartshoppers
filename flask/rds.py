import os
import psycopg2
conn = psycopg2.connect(
        host = 'smart-shoppers.cqq5zn6lxhjd.us-east-1.rds.amazonaws.com',
        user = 'smartshoppers',
        password = 'Smartsho33ers2022',
        dbname = 'postgres',
        port = 5432
)

# Open a cursor to perform database operations
cur = conn.cursor()

#how to drop a table 
# cur.execute('DROP TABLE IF EXISTS users;')

#how to create a table 
# cur.execute('CREATE TABLE users (email varchar (150) PRIMARY KEY,'
#                                  'first_name varchar (20) NOT NULL,'
#                                  'last_name varchar (20) NOT NULL,'
#                                  'role varchar (150) NOT NULL,'
#                                  'date_added date DEFAULT CURRENT_TIMESTAMP);'
#                                  )

#How to insert into a table
cur.execute('INSERT INTO users (email, first_name, last_name, role)'
            'VALUES (%s, %s, %s, %s)',
            ('savanahughes@gmail.com',
             'Savana',
             'Jaz',
             'student')
            )
conn.commit()

cur.close()
conn.close()