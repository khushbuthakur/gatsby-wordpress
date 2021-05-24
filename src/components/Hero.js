import React from 'react'

function Hero() {

    const bgImg = {
        backgroundImage : `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)), url("https://images.unsplash.com/photo-1577036421869-7c8d388d2123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60")`
    };

    return (
        <div className="relative bg-white flex flex-col">
            <div className="w-full py-16 md:pt-20 md:pb-24 lg:pt-32 lg:pb-40">
                <div className="container max-w-lg mx-0 md:w-1/2 xl:w-1/3 xl:max-w-xl">
                    <h1 className="text-3xl text-gray-800 md:text-5xl">Progress Through Partnerships</h1>
                    <p className="mt-6 text-gray-500 md:text-lg">Engage with communities in Boston and beyond by joining one or more of our programs. </p>
                    <a href="#" className="mt-8 btn text-white bg-red-600 hover:bg-red-800">Learn about our programs</a>
                </div>
            </div>
            <div className="h-64 w-full bg-gray-800 bg-cover bg-no-repeat bg-center md:h-full md:absolute md:inset-y-0 md:right-0 md:w-1/2 xl:w-2/3" 
            style={bgImg}>
            </div>
        </div>
    )
}

export default Hero
