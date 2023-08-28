import React from "react";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import 'boxicons'

import Footer from "./components/foter/Foter";
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
