import React from "react";
import Carousel from '../carousel/Carousel'; // Corregí el nombre del componente Carousel
import Footer from '../footer/Footer';

const Inicio = () => {
    return (
        <>
            <div>
                <Carousel /> {/* Cambié Caraousel a Carousel */}
                <div className='container mb-5'>
                    <h1 className='text-white p-2 bg-dark'>SportiumSellers</h1> {/* Corregí el className */}
                    <figure>
                        <blockquote className='blockquote'>
                            <p className='text-center mt-3'>
                                ¡Descubre la última palabra en moda activa en SportiumSellers! Nuestra tienda de ropa
                                deportiva combina estilo y rendimiento para que puedas lucir y sentirte genial mientras te
                                mantienes activo. Desde las últimas tendencias en prendas athleisure hasta equipos
                                especializados para tus entrenamientos, en SportiumSellers encontrarás todo lo que
                                necesitas para elevar tu estilo y tu juego. ¡Visítanos y descubre una nueva forma de
                                vivir la moda deportiva!
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer"> {/* Corregí el className */}
                            WIKIPEDIA
                        </figcaption>
                    </figure>
                    <h2 className='bg-dark text-white mb-5'>MODELOS DE ROPA</h2>
                    <iframe
                        width='80%'
                        height='315'
                        src="https://www.youtube.com/embed/jQo_OgaZgVY?si=Ue_jOGnbxCnApfAc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe> {/* Corregí el cierre de la etiqueta iframe */}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Inicio;