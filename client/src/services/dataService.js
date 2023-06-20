import axios from 'axios';
import Product from './../components/product';

let products = [
    {
        "_id": "123xz01",
        "title": 'Mazda 3 2023',
        "price": 12300.00,
        "engine": '2.5L',
        "hp": 191,
        "lbft": 186,
        "category": "Hatchback",
        "image": "mazda-3-2023.png"
    },
    {
        "_id": "123xz02",
        "title": 'M.GLE 63 Coupe',
        "price": 43100.00,
        "engine": '4.0L',
        "hp": 612,
        "lbft": 184,
        "category": "SUV",
        "image": "mercedez-amg-gle-63-couope.png"
    },
    {
        "_id": "123xz03",
        "title": 'Nissan Z',
        "price": 232000.00,
        "engine": '4.0L',
        "hp": 400,
        "lbft": 250,
        "category": "Coupe",
        "image": "nissan-z-2023.png"
    },
    {
        "_id": "123xz04",
        "title": 'Honda CRV',
        "price": 250000.00,
        "engine": '3.0L',
        "hp": 270,
        "lbft": 180,
        "category": "SUV",
        "image": "honda-cvr-2023.png"
    },
    {
        "_id": "123xz05",
        "title": 'Honda Accord',
        "price": 400000.00,
        "engine": '3.5L',
        "hp": 180,
        "lbft": 100,
        "category": "Sedan",
        "image": "honda-accord-2023.png"
    },
    {
        "_id": "123xz06",
        "title": 'Ford Territory',
        "price": 250000.00,
        "engine": '2.8L',
        "hp": 180,
        "lbft": 120,
        "category": "SUV",
        "image": "ford-territory-2023.png"
    },
    {
        "_id": "123xz07",
        "title": 'BMW Z4',
        "price": 250000.00,
        "engine": '4.0L',
        "hp": 180,
        "lbft": 120,
        "category": "Coupe",
        "image": "bmw-x3-2023.webp"
    },
    {
        "_id": "123xz08",
        "title": 'Porche 911',
        "price": 250000.00,
        "engine": '3.8L',
        "hp": 180,
        "lbft": 120,
        "category": "Coupe",
        "image": "bmw-x6-2023.webp"
    },
    {
        "_id": "123xz09",
        "title": 'Toyota Supra',
        "price": 250000.00,
        "engine": '3.8L',
        "hp": 180,
        "lbft": 120,
        "category": "Coupe",
        "image": "bmw-x6-2023.webp"
    },
]

let services = [
    {
        "title": "Parts Repairing",
        "icon": "fa-solid fa-wrench",
        "description": "Lorem ipsum dolor sit amet, consectetur adip occ sapien sed diam non pro pos"
    },
    {
        "title": "Vehicle Trade-In",
        "icon": "fa-solid fa-car-side",
        "description": "Lorem ipsum dolor sit amet, consectetur adip occ sapien sed diam non pro pos"
    },
    {
        "title": "Car Ispection",
        "icon": "fa-solid fa-user-gear",
        "description": "Lorem ipsum dolor sit amet, consectetur adip occ sapien sed diam non pro pos"
    },
]

class DataService {

    serverUrl = "http://127.0.0.1:5000"


    async getProducts() {
        const results = await axios.get(this.serverUrl + "/api/products")
        return results.data;
        // return properties;
    }

    async deleteProduct(id){
        const response = await axios.delete(this.serverUrl + "/api/products/" + id);
        return response.data;
    }

    async saveProduct(product){
        const response = await axios.post(this.serverUrl + "/api/products", product);
        return response.data;
    }

    async getCategories() {
        const categories = await axios.get(this.serverUrl + "/api/categories")
        return categories.data;
    }

    async getCoupons() {
        const coupons = await axios.get(this.serverUrl + "/api/coupons")
        return coupons.data;
    }


    async getCouponByCode(couponCode){
        try{
            const response = await axios.get(this.serverUrl + "/api/coupons/search/" + couponCode);
            return response.data;
        }
        catch{
            return null;
        }
    }
    async deleteCoupon(id){
        const response = await axios.delete(this.serverUrl + "/api/coupon/" + id);
        return response.data;
    }
    getServices() {
        return services;
    }


}
export default DataService;
