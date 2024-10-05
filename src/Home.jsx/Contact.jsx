import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="text-center py-[50px]">
            <span className="font-bold text-3xl text-yellow-500 ">_</span>
            <h1 className="font-bold text-2xl">My <span className="text-orange-600">Contact</span></h1>
            <p className="text-slate-400">Some basic information about myself</p>
        </div>
            <div className="bg-[#1c1528] text-white flex flex-col items-center justify-center p-8">
            <div className="w-full  mx-auto">
                <div className="text-left mb-8">
                    <h2 className="text-5xl font-bold text-white">
                        Contact <span className="text-orange-500">Us</span>
                    </h2>
                    <p className="text-lg text-gray-300 mt-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, commodi quidem! Veritatis delectus a et.
                    </p>
                </div>
                <form className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input
                            type="text"
                            placeholder="Your Your Name"
                            className="w-full p-4 bg-[#302738] text-gray-300 rounded-lg border-b border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                       
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="w-full p-4 bg-[#302738] text-gray-300 rounded-lg border-b border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                       
                        
                        <textarea
                            placeholder="Send Your Message"
                            className="w-full p-4 bg-[#302738] text-gray-300 rounded-lg border-b border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 col-span-2"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex justify-start space-x-4">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            SEND
                        </button>
                        <button
                            type="reset"
                            className="px-6 py-2 bg-[#302738] text-white font-bold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            RESET
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;
