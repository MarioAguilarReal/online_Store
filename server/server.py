import json
from flask import Flask

app = Flask(__name__)

@app.get('/')
def home():
    return '<h1>Hello from flask!</h1>'

@app.get('/test')
def test():
    return 'Hola'

#### API ENDPOINTS #####
#####    JSON ########

@app.get('/api/about')
def about():
    me = {'name': 'Mario Aguilar'}
    return json.dumps(me)
app.run(debug = True)