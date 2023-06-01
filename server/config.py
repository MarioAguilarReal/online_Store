import pymongo
import certifi

con_str = "mongodb+srv://marioreal:marioreal@cluster0.ejk6qub.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())
db = client.get_database("organika")