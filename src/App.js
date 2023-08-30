import React from "react";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import { Footer } from "./componentes/Footer";
//import  Maps from "./componentes/Mapas/Mapa";
//       <Maps /> esto va en la linea 16 pero me sale error de google-maps-reacts no se encuentra
import 'boxicons'


function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista />
      <button className="btn btn-danger">GoogleMaps</button>
      
      <Footer/>
    </div>
  );
}

export default App;
