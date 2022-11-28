import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Bikery | Blog');
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded p-5 shadow-xl">
                    <a
                        href="https://www.freecodecamp.org/news/how-to-manage-state-in-your-react-apps/"
                        target="_blank"
                        aria-label="Article" rel="noreferrer">
                        <img
                            src="https://blog.loginradius.com/static/05fa72d6fb6ace5ecff9919a78a8ff56/03979/Best-Practices.png"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase ">
                            13 Jul 2022
                        </p>
                        <a
                            href="https://www.freecodecamp.org/news/how-to-manage-state-in-your-react-apps/"
                            target="_blank"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-magenda-100" rel="noreferrer"
                        >
                            <p className=" text-2xl font-bold leading-5 dark:hover:text-magenda-100">What are the different ways to manage a state in a React application?</p>
                        </a>
                        <p className="mb-4 text-gray-700  ">
                            When we talk about state in our applications, it’s important to be clear about what types of state actually matter. There are four main types of state you need to properly manage in your React apps:
                            <div className='ml-2'>
                                <ul>
                                    <li>1. Local state</li>
                                    <li>2. Global state</li>
                                    <li>3. Server state</li>
                                    <li>4. URL state</li>
                                </ul>
                            </div>
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-magenda-100 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-magenda-100"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p classname="font-semibold ">5.2K</p>
                            </a>
                            <a
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-magenda-100 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-magenda-100"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold ">61</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded p-5 shadow-xl">
                    <a
                        href="https://www.geeksforgeeks.org/prototypal-inheritance-using-__proto__-in-javascript/"
                        target="_blank"
                        aria-label="Article" rel="noreferrer">
                        <img
                            src="https://www.cronj.com/blog/wp-content/uploads/inheritance.png"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase ">
                            22 Oct 2022
                        </p>
                        <a
                            href="https://www.geeksforgeeks.org/prototypal-inheritance-using-__proto__-in-javascript/"
                            target="_blank"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-magenda-100" rel="noreferrer"
                        >
                            <p className="text-2xl font-bold leading-5 dark:hover:text-magenda-100">How does prototypical inheritance work?</p>
                        </a>
                        <p className="mb-24 text-gray-700 mt-3">
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-magenda-100 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-magenda-100"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold ">7.4K</p>
                            </a>
                            <a
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-magenda-100 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-magenda-100"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold ">81</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded p-5 shadow-xl">
                    <a href="https://www.techtarget.com/searchsoftwarequality/definition/unit-testing"
                        target="_blank"
                        aria-label="Article" rel="noreferrer">
                        <img
                            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200514113957/What-is-Unit-Testing-and-Why-Developer-Should-Learn-It.png"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase ">
                            4 Aug 2022
                        </p>
                        <a
                            href="https://www.techtarget.com/searchsoftwarequality/definition/unit-testing"
                            target="_blank"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-magenda-100" rel="noreferrer"
                        >
                            <p className="text-2xl dark:hover:text-magenda-100 font-bold leading-5  ">What is a unit test? Why should we write unit tests?</p>
                        </a>
                        <p className="mb-4 text-gray-700">
                            The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-magenda-100 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-magenda-100"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold ">7.4K</p>
                            </a>
                            <a
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-magenda-100 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-magenda-100"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold ">81</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-xl p-5">
                    <a
                        href="https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"
                        target="_blank"
                        aria-label="Article" rel="noreferrer">
                        <img
                            src="https://presence.agency/wp-content/uploads/2020/07/1_lC1kj3IeXoE8Z3OCKJoWkw.jpeg"
                            className="object-cover w-full h-64 rounded"
                            alt=""
                        />
                    </a>
                    <div className="py-5">
                        <p className="mb-2 text-xs font-semibold text-gray-600 uppercase ">
                            28 Sep 2022
                        </p>
                        <a
                            href="https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"
                            target="_blank"
                            aria-label="Article"
                            className="inline-block mb-3 text-black transition-colors duration-200 hover:text-magenda-100" rel="noreferrer"
                        >
                            <p className="text-2xl dark:hover:text-magenda-100 font-bold leading-5 ">
                                React vs. Angular vs. Vue?
                            </p>
                        </a>
                        <p className="mb-4 text-gray-700  ">
                            Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="/"
                                aria-label="Likes"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-magenda-100 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-magenda-100"
                                    >
                                        <polyline
                                            points="6 23 1 23 1 12 6 12"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <path
                                            d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold ">4.7K</p>
                            </a>
                            <a
                                href="/"
                                aria-label="Comments"
                                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-magenda-100 group"
                            >
                                <div className="mr-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-magenda-100"
                                    >
                                        <polyline
                                            points="23 5 23 18 19 18 19 22 13 18 12 18"
                                            fill="none"
                                            strokeMiterlimit="10"
                                        />
                                        <polygon
                                            points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                        />
                                    </svg>
                                </div>
                                <p className="font-semibold ">32</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blog;