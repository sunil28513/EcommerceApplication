import React, {useState, useEffect} from 'react';
import ProductList from './ProductList';
import { APIURL } from '../env';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`${APIURL}/products/1`);
            const data = await res.json();
            setProducts([data]);  // Set the fetched product data in the state
        };
        fetchProduct();
    }, []);
    return (
        <>
            <section className="banner">
                <div className="container py-4">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-7">
                            <p>Starting at ${products.length > 0 && products[0].price}</p>
                            <h1 className='display-4'><strong>{products.length > 0 && products[0].title}</strong> </h1> 
                            <button className='btn btn-danger mt-3'>View Details</button>
                        </div>
                        <div className="col-md-4">
                            <img src={products.length > 0 && products[0].image} alt={products.length > 0 && products[0].title} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='productlist mt-4'>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-12">
                            <p className='m-0'>All Product Shop </p>
                            <h2>Customer Favorite Style</h2>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <ProductList/>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
