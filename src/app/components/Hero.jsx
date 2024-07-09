import React from 'react';
import Image from "next/image";

const Hero = () => {
    return(
        <section className="h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="col-span-7 place-self-center text-center sm:text-left mt-20">
                <div>
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Hello And Welcome
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, coluptatum.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300 hover:bg-slate-100 text-white border border-white"> Read</button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300 hover:bg-slate-800 text-white border border-white mt-3"> Download</button>
                    </div>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="flex justify-end">
                    <div className="relative h-96 w-96">
                        <Image
                            src="/images/computer.jpg" // Replace with your image path
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    )
}
export default Hero