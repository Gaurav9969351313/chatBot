# pip install pymssql

import pymssql
SERVER = "servername"
USER = "username"
PASSWORD = "password"
DATABASE = "dbname"
connection = pymssql.connect(server=SERVER, user=USER, password=PASSWORD, database=DATABASE)
cursor = connection.cursor() # to access field as dictionary use cursor(as_dict=True)
cursor.execute("SELECT TOP 1 * FROM TableName")
row = cursor.fetchone()
######## CREATE TABLE ########
cursor.execute("""
    CREATE TABLE posts (
    post_id INT PRIMARY KEY NOT NULL,
    message TEXT,
    publish_date DATETIME )
""")

######## INSERT DATA IN TABLE ########
cursor.execute("""
    INSERT INTO posts VALUES(1, "Hey There", "11.23.2016")
""")

# commit your work to database
connection.commit()

######## ITERATE THROUGH RESULTS ########
cursor.execute("SELECT TOP 10 * FROM posts ORDER BY publish_date DESC")

for row in cursor:
    print("Message: " + row[1] + " | " + "Date: " + row[2])
# if you pass as_dict=True to cursor

# print(row["message"])
connection.close();
