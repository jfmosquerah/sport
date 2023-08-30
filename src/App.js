import React from "react";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import { Footer } from "./componentes/Footer";
import  Maps from "./componentes/Mapas/Mapa";
import 'boxicons'


function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista />
      <button className="btn btn-danger">GoogleMaps</button>
      <Maps />
      <Footer/>
    </div>
  );
}

export default App;
