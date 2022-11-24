import React from 'react';

const Team = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-5 py-2 mb-4 text-sm font-semibold tracking-wider text-deep-purple-accent-400 uppercase rounded-full bg-gray-300">
                        Core Team
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Welcome</span>
                    </span>{' '}
                    our talented team of professionals
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    A young enthusiastic team with a bunch of talents and experience. They are able to work 24/7 for the seek of customer satisfaction.
                </p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/50529011_2167455253569650_3596436576642531328_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGg4NBm-thEkgUyPfL0v_RSQQgFYkrENjxBCAViSsQ2PCA5CX2lIHQgdBB3LeoySZIicHf8rug-77iFmlkUJ6jU&_nc_ohc=kzI0H0Vo1PsAX8HJ-D7&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfCNPYRU-v4-4mT42pqdSpQag--2XLOv8RIsd9I_0ahLIg&oe=6392D61B"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Abir Khan
                            </p>
                            <p className="mb-4 text-xs text-gray-100">Event Manager</p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Vastly experienced in event management.
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t39.30808-6/314562385_5381577858607607_8154966350035518981_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHLnoGfQSQOw1JTcQddFGCe37ot-6t9vNzfui37q3283E9yhyWJ5obigxbEdVkdasBPE4VCeWZDVn5WARCBNu-4&_nc_ohc=v23DBG85E6EAX8SvWUU&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfAN62IJNr-snS9Ul_zndvFBj3D9Fhv6Y6ZilHqnYczPKQ&oe=63854CB3"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Shuvro Mojumder
                            </p>
                            <p className="mb-4 text-xs text-gray-100">Lead Photographer</p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Photographer & Storyteller at Photobook by Shuvro
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t1.6435-9/72185653_1013689458967691_1395892030789386240_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHI4pN1wPKqxFy7pHxe2ELO7UpbsOK4qdDtSluw4rip0Gahqnh1U-rubSgk1g08yXYWF-ZRhN9PDI0RtWgyBHiq&_nc_ohc=GoGJbhj3LFAAX-Hztmb&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfATR4yQV25LDPEaBnqxZvoJwxl3sId8BDxJYNk-uNJitA&oe=6392DA0D"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Tomima Moumi
                            </p>
                            <p className="mb-4 text-xs text-gray-100">Designer</p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Vastly experienced in wedding decorations.
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://scontent.fjsr8-1.fna.fbcdn.net/v/t31.18172-8/22095897_740571849461290_2437389895257699801_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFCE-VD26PCDJEATqI9sVw4M0KIKOx6818zQogo7HrzXxEB1nxvj66zBQu7W8anqEPMnLMuPVXDtYQpvNKsuFxh&_nc_ohc=Qi6XMl9SWnEAX9EiyuC&_nc_ht=scontent.fjsr8-1.fna&oh=00_AfDK3jWwLsU4o3nHHUtVawYZdLLh3CATvYoCXzY6JCPbFA&oe=6392BA16"
                            alt="Person"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-1 text-lg font-bold text-gray-100">
                                Fahim Steinum
                            </p>
                            <p className="mb-4 text-xs text-gray-100">Lead Editor.</p>
                            <p className="mb-4 text-xs tracking-wide text-gray-400">
                                Vastly experienced in editing.
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                                <a
                                    href="/"
                                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;