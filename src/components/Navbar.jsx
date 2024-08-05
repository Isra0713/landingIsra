import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4 fixed w-full top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-2xl font-bold">Israel Gomez</a>
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="hover:text-gray-400 cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="hover:text-gray-400 cursor-pointer"
                        >
                            Acerca de
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="gallery"
                            smooth={true}
                            duration={500}
                            className="hover:text-gray-400 cursor-pointer"
                        >
                            Galería
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="hover:text-gray-400 cursor-pointer"
                        >
                            Proyectos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
