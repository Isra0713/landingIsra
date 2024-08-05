import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-6">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Israel Gomez. Todos los derechos reservados.</p>
                <div className="mt-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        LinkedIn
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        GitHub
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
