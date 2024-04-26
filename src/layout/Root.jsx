import React from 'react';
import Nav from '../components/headers/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default Root;