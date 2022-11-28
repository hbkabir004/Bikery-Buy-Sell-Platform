import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';



const CategoryProductCard = ({ categoryProduct }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    // console.log(products);
    const { product_id, name, img, description, resale_price, used, original_price, location, date } = categoryProduct;


    return (

        <PhotoProvider
            speed={() => 800}
            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
        >
            <div
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
                <div className="flex flex-col h-full">
                    <PhotoView src={img}>
                        <img
                            src={img}
                            style={{ objectFit: 'cover' }}
                            className="object-cover w-full h-48"
                            alt=""
                        />
                    </PhotoView>


                    <div className="flex-grow border border-t-0 rounded-b">
                        <div className="p-5 shadow-lg">
                            <h6 className="mb-2 font-semibold text-2xl leading-5 hover:text-magenda-100">
                                {name}
                            </h6>
                            <p className="text-xs text-gray-900 mt-2 mb-5">
                                {description.slice(0, 100)}...
                            </p>
                            <h5 className="mb-2 font-semibold text-xl leading-5 hover:text-magenda-100">
                                Location: {location}
                            </h5>
                            <div className='flex justify-between'>
                                <div>
                                    <h4 className="my-2 font-bold text-lg leading-5 hover:text-magenda-100">
                                        Resale Price : ৳<span className='text-magenda-100'>{resale_price}</span>
                                    </h4>
                                    <h4 className="my-2 font-semibold text-lg leading-5 hover:text-magenda-100">
                                        Original Price: ৳<span className='text-magenda-100'>{original_price}</span>
                                    </h4>
                                </div>

                                <div className='mt-5'>
                                    <p className="text-sm text-gray-900">
                                        <span className='text-magenda-100 font-semibold'>{used}</span> Years Used
                                    </p>
                                    <p className="text-sm text-gray-900">
                                        Posted <span className='text-magenda-100 font-semibold'>{date}</span> days ago.
                                    </p>
                                </div>
                            </div>

                            <div className='flex justify-center align-middle'>
                                <Link to={`/products/${product_id}`}>
                                    <button
                                        type='button'
                                        htmlFor="booking-modal"
                                        class="focus:outline-none text-white bg-magenda-100 hover:bg-gray-400 hover:text-black  focus:ring-4 font-semibold rounded-md text-sm px-5 py-2.5 mb-2 mt-5">
                                        Book Now
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </PhotoProvider>


    );
};

export default CategoryProductCard;