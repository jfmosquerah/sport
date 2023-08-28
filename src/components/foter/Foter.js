import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                            <img src='./titulo-IMAGENUSADA.png' className='mx-2' height='60' alt='Logo' />
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>Ropa deportiva.</li>
                            <li className='text-center'>En esta tienda encontrará la mejor ropa deportiva.</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>Síguenos en</li>
                            <li className='d-flex justify-content-between'>
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-youtube"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-twitter"></i>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
