import React, {useState} from 'react';
import Sidebar from '../components/header/Navbar/Sidebar';
import Navbar from '../components/header/Navbar';

const Nvbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
       setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        </>
    )
}

export default Nvbar;
