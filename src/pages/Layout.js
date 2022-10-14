import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from './Home'
const Layout = () => {
    return (
        <div>
          <header style={{ background: 'lighrgray', padding: 15,
        fontSize: 24,}}><Home/>
        </header>
        <main>
            <Outlet />
        </main>
        </div>

    );
};

export default Layout;