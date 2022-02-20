import React from 'react';
import Header from '../components/Header'
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen w-screen">
            <Header/>
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
