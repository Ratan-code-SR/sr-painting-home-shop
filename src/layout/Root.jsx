import React from 'react';
import Nav from '../components/headers/Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer></footer>
        </div>
    );
};

export default Root;