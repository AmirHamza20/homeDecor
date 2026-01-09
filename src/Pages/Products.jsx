import React from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCade from '../Components/ProductCade/ProductCade';

const Products = () => {
    const {products} = useProducts()
    return (
        <div>
            <div className='flex justify-between py-4 items-center'>
                <h1 className='text-3xl font-semibold'>All Products</h1>
                <button className='btn btn-outline'>Search</button>
            </div>
            <div className='grid grid-cols-1. md: grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                products.map(product => (
                    <ProductCade key={product.id} product={product}></ProductCade>
                ))
            }
            </div>
        </div>
    );
};

export default Products;