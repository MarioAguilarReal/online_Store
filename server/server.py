import json
from flask import Flask, request
from config import db
from bson import ObjectId
from flask import abort
from flask_cors import CORS

app = Flask(__name__)
CORS(app) #warning: turn off security check

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
    return json.dumps(products)


@app.post("/api/products")
def save_product():
    #Should save a new product
    product = request.get_json()

    #there should a title and it should at 3 chars
    if "title" not in product or len(product['title']) < 3:
        return abort(400, 'invalid title')

    if "category" not in product or len(product['category']) < 1:
        return abort(400, 'invalid category')

    if "image" not in product or len(product['image']) < 1:
        return abort(400, 'invalid image')


    if 'price' not in product:
        return abort(400, 'Price is required')

    if not isinstance(product['price'], (int, float)):
        return abort(400, 'Price should be a number')

    if product['price'] < 1:
        return abort(400, 'Price should be a greater than zero')

    db.products.insert_one(product)
    return json.dumps(fix_id(product))

@app.delete("/api/products/<id>")
def delete_product(id):
    if not ObjectId.is_valid(id):
        return abort(400, "invalid ID")

    db_id = ObjectId(id)
    result = db.products.delete_one({"_id": db_id})
    if result.deleted_count == 0:
        return abort(404, "product not found")

    return json.dumps({"deleted": True})


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


@app.get("/api/products/category/<cat>")
def get_prods_by_category(cat = None):

    cursor = db.products.find({"category": cat})
    products = []

    for prod in cursor:
        products.append(fix_id(prod))
    return json.dumps(products)


@app.get("/api/products/search/<title>")
def get_products_by_title(title = None):

    cursor = db.products.find({"title": {"$regex": title, "$options": "i"}})
    products = []

    for prod in cursor:
        products.append(fix_id(prod))

    return json.dumps(products)


@app.get("/api/product/<id>")
def get_product_by_id(id):
    if not ObjectId.is_valid(id):
        return abort(400, 'Invalid id')
    db_id = ObjectId(id)
    product = db.products.find_one({"_id":db_id})

    if product is None:
        return abort(404, "invalid id")

    return json.dumps(fix_id(product))


"""
read all
read by code
save
"""
@app.get("/api/coupons")
def get_coupons():
    coupons = []

    cursor = db.coupon.find({})
    for coup in cursor:
        coupons.append(fix_id(coup))
    return json.dumps(coupons )


@app.post("/api/coupons")
def save_coupon():
    coupon = request.get_json()

    if "code" not in coupon or len(coupon['code']) < 3:
        return abort(400, 'Invalid code')

    if "discount" not in coupon:
        return abort(400, 'discount is required')

    if not isinstance(coupon['discount'], (int, float)):
        return abort(400, 'Discount should be a number')

    if coupon['discount']>40 or coupon['discount']<1:
        return abort(400, 'Discount invalid')

    db.coupon.insert_one(coupon)

    return json.dumps(fix_id(coupon))


@app.get("/api/coupons/search/<code>")
def get_coupons_by_code(code = None):

    coupon = db.coupon.find_one({"code": code})

    if coupon  == None:
        return abort(404, "Coupon not found")


    return json.dumps(fix_id(coupon))

@app.delete("/api/coupon/<id>")
def delete_coupon(id):
    if not ObjectId.is_valid(id):
        return abort(400, "invalid ID")

    db_id = ObjectId(id)
    result = db.coupon.delete_one({"_id": db_id})
    if result.deleted_count == 0:
        return abort(404, "Coupon not found")

    return json.dumps({"deleted": True})
"""
code (required, length > 3)
discount (required, numbers, greater than zero, lower than 40)
"""


app.run(debug = True)
