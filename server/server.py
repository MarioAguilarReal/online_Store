import json
from flask import Flask, request
from config import db

app = Flask(__name__)


@app.get('/')
def home():
    return '<h1>Hello from flask!</h1>'


@app.get('/test')
def test():
    return 'Hola'


@app.get('/api/about')
def about():
    me = {'name': 'Mario Aguilar'}
    return json.dumps(me)


########################
#### API ENDPOINTS #####
#####    JSON   ########
########################

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj


@app.get('/api/version')
def about_me():
    version = {"Name": "mouse", "verson": 35, "build":2948}
    return json.dumps(version)


@app.get("/api/products")
def get_products():
    products = []

    cursor = db.products.find({})
    for prod in cursor:
        products.append(fix_id(prod))
    return json.dumps(f'{products}' )


@app.post("/api/products")
def save_product():
    #Should save a new product
    product = request.get_json()
    db.products.insert_one(product)

    print(product)
    return json.dumps(fix_id(product))


#get /api/reports/total
@app.get("/api/reports/total")
def get_total():
    cursor = db.products.find({})
    total_cars=0
    total_price=0

    for prod in cursor:
        total_cars+=1
        total_price += prod['price']

    data = {"total": total_cars, "price": total_price}
    return json.dumps(data)


@app.get("/api/categories")
def get_categories():
    cursor = db.products.find({})
    categories = []

    for prod in cursor:
        print(prod["category"], categories)

        if prod["category"] not in categories:
            categories.append(prod["category"])
    categories.sort()
    return json.dumps(categories)

app.run(debug = True)