import React from 'react';

const Best_paintings = () => {
    return (
        <div>
            <div className='md:w-[700px] mx-auto'>
                <h1 className='text-center text-3xl'>Our Best Painting</h1>
                <p className='border-2 border-blue-400 w-20 mx-auto'></p>
                <p className='text-center'>Discover the epitome of artistic excellence at SR Painting's 'Our Best Painting' section, where every stroke tells a story of unparalleled creativity. Immerse yourself in a curated selection of masterpieces that captivate the imagination and inspire awe.</p>
            </div>
            <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.ibb.co/Zxw5Fw6/images-11.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">Muro Nature</span>
                            <h3 className="text-3xl font-bold">The Oil Painting of Home and Trees</h3>
                            <p className="my-6 dark:text-gray-600">This captivating oil painting depicts a tranquil scene of a rustic home nestled among towering trees, evoking a sense of peace and nostalgia. With masterful brushstrokes and a rich color palette, it brings the serenity of nature into the heart of the home.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://i.ibb.co/DWc0r6w/oil6.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">Genis City</span>
                            <h3 className="text-3xl font-bold">A Vibrant Urban Symphony in Paintl</h3>
                            <p className="my-6 dark:text-gray-600">The Genis City painting is a vibrant tapestry of urban life, bustling with energy and movement. With its intricate details and bustling streets, it captures the essence of a thriving metropolis in just a few brushstrokes.</p>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://i.ibb.co/tP8K97M/images-24.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">Jummobi</span>
                            <h3 className="text-3xl font-bold">Whimsical Innocence Watercolor Portrait Girl</h3>
                            <p className="my-6 dark:text-gray-600">This enchanting watercolor painting portrays a young girl with an aura of innocence, captured in delicate brushstrokes and soft hues. Through the artist's skillful use of watercolor, the girl's expression exudes a sense of wonder and charm, inviting viewers into her world.</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Best_paintings;