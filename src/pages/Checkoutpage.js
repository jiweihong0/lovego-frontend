import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RowCardlist from "../components/RowCardlist/RowCardlist";
import Costdeliver from "../components/Costdeliver/Costdeliver";
import React, { useState } from 'react';



function Checkoutpage() {
    const [cash, setcash] = useState(100);
    const setmoney = (value) => {
        setcash(value)
    }

    return (
        <>
            <Navbar />
            <RowCardlist setmoney={setmoney} />
            <Costdeliver cash={cash} />
            <Footer />
        </>
    );
}

export default Checkoutpage;