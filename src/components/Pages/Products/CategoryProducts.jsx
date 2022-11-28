import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import CategoryProductCard from './CategoryProductCard';


const CategoryProducts = () => {
    useTitle('Bikery | Categories');
    const products = useLoaderData();

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="inline-block px-5 py-2 mb-4 text-2xl font-semibold tracking-wider text-magenda-100 uppercase rounded-full bg-gray-300">
                        Our Products
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        We provide a bunch of Products at this moment. Check it out to buy or sell to us.
                    </p>
                </div>

                <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
                    {
                        products.map(product => <CategoryProductCard
                            key={product.product_id}
                            categoryProduct={product}
                        ></CategoryProductCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default CategoryProducts;