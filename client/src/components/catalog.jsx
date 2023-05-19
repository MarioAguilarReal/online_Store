import './catalog.css';
import Product from './product';
import DataService from "../services/dataService";
import { useEffect, useState } from 'react';

const Catalog = () => {
    //allProducts
    const [allProducts, setAllProducts] = useState([])
    //lets practice the use of state variables
    const [categories, setCategories] = useState([]);

    //do something when the component loads
    useEffect(() => {
        let service = new DataService();
        let prods = service.getProducts();
        setAllProducts(prods);
        loadCatalog();
    }, []);

    const loadCatalog = () => {
        let categ = ['Sedan', 'Coupe', 'Hatchback', 'SUV'];
        setCategories(categ);
    }

    const funcFilter = filter => {
        console.log(filter);
        //find the products that match the categories
        //and add to te list
        let list = [];

        allProducts.forEach(product => {
            if(product.category == filter) list.push(product)
        });
        console.log(list)
    }

    return (
        <div className='catalog'>
            <h3>All Vehicles</h3>
            <h5>WE HAVE <b>{allProducts.length}</b> CARS AVAILABLES FOR YOU</h5>

            <div className='products'>
                <h6>You can filter the cars with the category</h6>
                {categories.map(filter => <button className='btn-filter' key={filter} onClick={() =>funcFilter(filter)}>{filter}</button>)}<br />
                {allProducts.map(prod => <Product key={prod._id} data={prod} />)}
            </div>
        </div>
    );
}

export default Catalog;