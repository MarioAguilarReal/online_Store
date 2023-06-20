import './catalog.css';
import Product from '../components/product';
import DataService from "../services/dataService";
import { useEffect, useState } from 'react';

const Catalog = () => {
    //allProducts
    const [allProducts, setAllProducts] = useState([])
    //lets practice the use of state variables
    const [categories, setCategories] = useState([]);
    //create te state varuable for the filter products
    const [productsToDisplay, setProductsToDisplay] = useState([]);

    //do something when the component loads
    useEffect(() => {
        loadCatalog();
    }, []);

    async function loadCatalog() {
        let service = new DataService();
        let prods = await service.getProducts();
        setAllProducts(prods);
        setProductsToDisplay(prods);

        // let categ = ['Sedan', 'Coupe', 'Hatchback', 'SUV'];
        let categ = await service.getCategories();

        setCategories(categ);
    }

    const funcFilter = filter => {
        //find the products that match the categories
        //and add to te list
        let list = [];

        allProducts.forEach(product => {
            if (product.category === filter) list.push(product)
        });
        setProductsToDisplay(list);
    }

    const clearFilter = () => {
        setProductsToDisplay(allProducts);
    }

    return (
        <div className='catalog'>
            <div className='hero'>
                <h3>CATALOG</h3>
            </div>

            <div className='products'>
                <div className='filter'>
                    <h5>WE HAVE <b>{productsToDisplay.length}</b> CARS AVAILABLES FOR YOU</h5>
                    <h5>You can filter the cars with the category</h5>
                    <button onClick={clearFilter} className='btn-filter' >All Vehicles</button>
                    {categories.map(filter => <button className='btn-filter' key={filter} onClick={() => funcFilter(filter)}>{filter}</button>)}<br />
                </div>
                {productsToDisplay.map(prod => <Product key={prod._id} data={prod} />)}
            </div>
        </div>
    );
}

export default Catalog;
