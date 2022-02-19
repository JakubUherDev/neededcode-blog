import React from 'react';
import Header from '../components/Header'
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        // <>
        //  <Header/>
        //     {children}
        // <Footer />
        // </>

        <div className="flex flex-col h-screen">
            <Header/>
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
