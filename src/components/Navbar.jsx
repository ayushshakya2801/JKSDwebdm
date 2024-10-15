import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (

        <header className="bg-white py-3 w-full z-50 transition-all duration-300 sticky top-0">

            <nav className="flex justify-between items-center w-[94%] h-12 mx-auto">
                <Link to="/">
                    <img
                        className="w-32 object-contain cursor-pointer"
                        src="./logo/jksd-logo.png"
                        alt="Logo"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex flex-row text-[20px] items-center gap-[3vw]">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `group ${isActive ? "active" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.name}
                                        <div
                                            className={`bg-orange-500 h-[2px] ${isActive ? "w-full" : "w-0"} group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div
                    onClick={onToggleMenu}
                    className="text-3xl cursor-pointer md:hidden text-black"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <ul className={'fixed top-4 left-0 w-full h-full bg-white  z-40 flex flex-col text-xl gap-3 mt-12 p-1'}>
                    {menuItems.map((item, index) => (
                        <li key={index} className="w-full">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `block text-center py-2 ${isActive ? "text-orange-500" : "text-black"}`
                                }
                                onClick={() => setMenuOpen(false)} // Close menu on selection
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}

const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Web Development', path: '/webdev' },
    { name: 'Digital Marketing', path: '/digitalmarketing' },
    { name: 'Contact Us', path: '/contact' },
];

export default Navbar;
