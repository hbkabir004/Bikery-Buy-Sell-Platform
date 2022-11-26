import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className="dark:bg-violet-400" style={{ backgroundImage: `url('https://i.ibb.co/Htf22gY/the-race-club-speakeasy-roma-6.png')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-3">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white">Buy and Sell your <span className='text-magenda-100'>BIKES' Parts</span> for the best price</h1>
                    <p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl text-white">From secondhand MotorBike to custom bike parts, we have a lot of services to offer you. We provide only the best bikes and bikes' part from authentic buyers to fruitful sellers.</p>

                </div>
            </div>
            <div className="lg:block hidden carousel w-6/12 h-[450px] mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/mechanic-hand-checking-fixing-broken-car-car-service-garage_146671-19718.jpg?w=1380&t=st=1669451576~exp=1669452176~hmac=95d68bcf172568ec6f4616c1a44ac855e5c4f6cebccc930b3dfcbf36d435c79b" className="w-full" alt='' />
                    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/alloy-bicycle-rear-derailleur_728015-291.jpg" className="w-full" alt='' />
                    {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div> */}
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/mechanic-repairing-bicycle_1170-2479.jpg?w=1380&t=st=1669451471~exp=1669452071~hmac=4d90391f8e4c5e9c7a9644519b9f949006a6338f62b4ed698ddff109b0bda76d" className="w-full" alt='' />
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