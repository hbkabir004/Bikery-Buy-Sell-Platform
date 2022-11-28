import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';



const AllCategories = () => {

    const [allCategories, setAllCategories] = useState([]);
    useEffect(() => {
        fetch(`https://server-rose.vercel.app/categories/`)
            .then(res => res.json())
            .then(data => setAllCategories(data))
            .catch(error => console.log(error))
    }, [])



    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="inline-block px-5 py-2 mb-4 text-2xl font-semibold tracking-wider text-magenda-100 uppercase rounded-full bg-gray-300">
                        Product Categories
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        We provide a bunch of Categories at this moment. Check it out to buy or sell to us.
                    </p>
                </div>

                <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 sm:grid-cols-2">
                    {
                        allCategories.map(category => <CategoryCard
                            key={category.category_id}
                            allCategory={category}
                        ></CategoryCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllCategories;