import React from 'react';
import { Link, } from 'react-router';
import ProductCade from '../Components/ProductCade/ProductCade';
import useProducts from '../Hooks/useProducts';

const Home = () => {
    
    const {products, loading, error} = useProducts()
    
    const featuredProducts = products.slice(0, 6)
    return (
        <div>
            <div className='flex justify-between py-4 items-center'>
                <h1 className='text-3xl font-semibold'>Featured Products</h1>
                <Link className='btn btn-outline' to='/products'>See All Products</Link>
            </div>
            <div className='grid grid-cols-1. md: grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                featuredProducts.map(product => (
                    <ProductCade key={product.id} product={product}></ProductCade>
                ))
            }
            </div>
        </div>
    );
};

export default Home;