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
# email = params['email'].strip()
email = 'sanakurata1996@gmail.com'
print(email)
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
result = cur.fetchone()
print(result)
cur.close()
conn.close()

# for row in results:
#         print("email: {}".format(row['email']))
#         print("firstName: {}".format(row['first_name']))
#         print("lastName: {}".format(row['last_name']))
#         print("role: {}".format(row['role']))


#how to drop a table 
# cur.execute('DROP TABLE IF EXISTS quiz_answers;')

# how to create a table 
# cur.execute('CREATE TABLE answers (email varchar (150) NOT NULL,'
#                                  'id INTEGER NOT NULL,'
#                                  'answer varchar (150) NOT NULL,'
#                                  'PRIMARY KEY (email, id),' #composite primary key
#                                  'date_added date DEFAULT CURRENT_TIMESTAMP);'
#                                  )

#How to insert into a table
# cur.execute('INSERT INTO users (email, first_name, last_name, role)'
#             'VALUES (%s, %s, %s, %s)',
#             ('savanahughes@gmail.com',
#              'Savana',
#              'Jaz',
#              'student')
#             )
