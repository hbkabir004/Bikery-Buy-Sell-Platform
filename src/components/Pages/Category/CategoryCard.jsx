import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';



const CategoryCard = ({ allCategory }) => {
    const { category_id, name, logo, total } = allCategory;
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
                    <PhotoView src={logo}>
                        <img
                            src={logo}
                            style={{ objectFit: 'cover' }}
                            className="object-cover w-full h-48"
                            alt=""
                        />
                    </PhotoView>


                    <div className="flex-grow border border-t-0 rounded-b">
                        <div className="p-5">
                            <h6 className="mb-2 font-semibold text-2xl leading-5 hover:text-deep-purple-accent-400">
                                {name}
                            </h6>
                            {/* <p className="text-sm text-gray-900">
                                {description.slice(0, 100)}...
                            </p> */}

                            <div className='flex justify-end align-middle'>
                                <Link to={`/categories/${category_id}`}>
                                    <button type="button" class="focus:outline-none text-white bg-deep-purple-accent-400 hover:bg-gray-400 hover:text-black  focus:ring-4 font-semibold rounded-md text-sm px-5 py-2.5 mb-2">View Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </PhotoProvider>


    );
};

export default CategoryCard;