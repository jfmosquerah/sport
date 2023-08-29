import React from "react";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import { Footer } from "./componentes/Footer";
import 'boxicons'


function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista /> 
      <Footer/>
    </div>
  );
}

export default App;
