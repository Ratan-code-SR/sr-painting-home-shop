import React from 'react';
import Nav from '../components/headers/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div className='   '>
            <header className=' mx-auto  bg-gradient-to-r from-rose-100 to-teal-100 text-black border-2 border-b-yellow-200 '  >
                <Nav />
            </header>
            <main className='container mx-auto px-2'>
                <Outlet />
            </main>
            <footer className=' container mx-auto' style={{ backgroundImage: 'url(../bg.svg)' }}>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;