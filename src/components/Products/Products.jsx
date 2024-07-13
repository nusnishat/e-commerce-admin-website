import React, { useContext, useState } from 'react';
import Product from '../Product/Product';
import { AuthContext } from '../providers/AuthProviders';

const Products = () => {
    const { products } = useContext(AuthContext);
    const [visibleProducts, setVisibleProducts] = useState(12); // Number of products initially visible

    const showAllProducts = () => {
        setVisibleProducts(products.length);
    };

    return (
        <div className='my-20 me-8 '>
            <h1 className='text-3xl font-ibold '>Products List</h1>
            <p className='text-zinc-700'>Grocery Mart Admin Panel</p>
            {/* ------------display products */}
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.slice(0, visibleProducts).map(product => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
            {/* -------show all button-------- */}
            {visibleProducts < products.length && (
                <div className="mt-4 flex justify-center">
                    <button
                        className="bg-orange text-white px-4 py-2 rounded-md"
                        onClick={showAllProducts}
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;
