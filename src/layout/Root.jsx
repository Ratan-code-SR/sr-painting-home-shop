import React from 'react';
import Nav from '../components/headers/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div className='   '>
            <header className=' mx-auto '  >
                <Nav />
            </header>
            <main className=' container mx-auto px-4'>
                <Outlet />
            </main>
            <footer className=' container mx-auto' style={{ backgroundImage: 'url(bg.svg)' }}>
                <Footer />
            </footer>
        </div>
    );
};

export default Root;