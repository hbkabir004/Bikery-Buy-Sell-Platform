import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section>
            <div className="dark:bg-violet-400 banner-img " style={{ backgroundImage: `url('https://images.wallpaperscraft.com/image/single/books_reading_tea_212048_1920x1080.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-3">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">Buy and Sell your books for the best price</h1>
                    <p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl text-white">From applied literature to educational resources, we have a lot of books to offer you. We provide only the best books from authentic buyers to fruitful sellers.</p>

                </div>
            </div>
            <div className="lg:block hidden carousel w-6/12 h-[450px] mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/zX1CWWZ/banner03.png" className="w-full" alt='' />
                    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/BBG5hYx/banner01.png" className="w-full" alt='' />
                    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/2878gNY/banner02.png" className="w-full" alt='' />
                    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
            </div>
        </section >
    );
};

export default Banner;