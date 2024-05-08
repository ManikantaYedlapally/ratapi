










# from flask import Flask, request, jsonify
# from pymongo import MongoClient
# from bson import ObjectId
# import base64

# app = Flask(__name__)

# # MongoDB connection string
# password = "2coTQ6kT1ZZpPote"
# uri = "mongodb+srv://manikantayedlapally:2coTQ6kT1ZZpPote@rat.anmezbj.mongodb.net/?retryWrites=true&w=majority&appName=RAT"
# client = MongoClient(uri)
# db = client['RAT']  # Replace 'RAT' with your database name
# collection = db['rat_it_grocery_list']  # Replace 'rat_it_grocery_list' with your collection name

# # API routes

# # Route to fetch all items
# @app.route('/fetch_all_items', methods=['GET'])
# def get_all_items():
#     try:
#         items = list(collection.find({}))
#         # Convert ObjectId to string for each item and format data
#         formatted_items = []
#         for item in items:
#             formatted_item = {
#                 '_id': str(item['_id']),
#                 'name': item['name'],
#                 'price': item['price'],
#                 'quantity': item['quantity'],
#                 'description': item['description'],
#                 'category': item['category']
#             }
#             formatted_items.append(formatted_item)
#         return jsonify(formatted_items), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Route to fetch items by category
# @app.route('/fetch_items_by_category/<string:category>', methods=['GET'])
# def get_items_by_category(category):
#     try:
#         items = list(collection.find({'category': category}))
#         # Convert ObjectId to string for each item and format data
#         formatted_items = []
#         for item in items:
#             formatted_item = {
#                 '_id': str(item['_id']),
#                 'name': item['name'],
#                 'price': item['price'],
#                 'quantity': item['quantity'],
#                 'description': item['description'],
#                 'category': item['category']
#             }
#             formatted_items.append(formatted_item)
#         return jsonify(formatted_items), 200
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # Route to add an item
# @app.route('/add_item', methods=['POST'])
# def add_item():
#     try:
#         data = request.json  # Extract JSON data from the request
#         # Insert data into MongoDB collection
#         result = collection.insert_one(data)
        
#         # Convert ObjectId instance to string
#         inserted_id = str(result.inserted_id)
        
#         return jsonify({"message": "Item added successfully", "inserted_id": inserted_id}), 201
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == '__main__':
#     app.run(host='192.168.89.93', port=5000, debug=True)

from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Database configurations
MYSQL_HOST = 'localhost'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'Atnakinam@81878'
MYSQL_DB = 'bc'

# Establish database connection
db_connection = mysql.connector.connect(
    host=MYSQL_HOST,
    user=MYSQL_USER,
    password=MYSQL_PASSWORD,
    database=MYSQL_DB
)
cursor = db_connection.cursor()

# Route to fetch all items from the database
@app.route('/fetch_all_items', methods=['GET'])
def get_all_items():
    try:
        query = "SELECT * FROM rat_it_grocery_list"
        cursor.execute(query)
        items = cursor.fetchall()
        # Format data
        formatted_items = []
        for item in items:
            formatted_item = {
                'id': item[0],
                'name': item[1],
                'price': item[2],
                'quantity': item[3],
                'description': item[4],
                'category': item[5]
            }
            formatted_items.append(formatted_item)
        return jsonify(formatted_items), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to fetch items by category
@app.route('/fetch_items_by_category/<string:category>', methods=['GET'])
def get_items_by_category(category):
    try:
        query = "SELECT * FROM rat_it_grocery_list WHERE category = %s"
        cursor.execute(query, (category,))
        items = cursor.fetchall()
        # Format data
        formatted_items = []
        for item in items:
            formatted_item = {
                'id': item[0],
                'name': item[1],
                'price': item[2],
                'quantity': item[3],
                'description': item[4],
                'category': item[5]
            }
            formatted_items.append(formatted_item)
        return jsonify(formatted_items), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Route to add an item to the database
@app.route('/add_item', methods=['POST'])
def add_item():
    try:
        data = request.json
        query = "INSERT INTO rat_it_grocery_list (name, price, quantity, description, category) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(query, (data['name'], data['price'], data['quantity'], data['description'], data['category']))
        db_connection.commit()
        return jsonify({"message": "Item added successfully"}), 201
    except Exception as e:
        db_connection.rollback()
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run( debug=True)
