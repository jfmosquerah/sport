import React from "react";
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import { Api1 } from "./componentes/Api1/App1";
import { Footer } from "./componentes/Footer";
import 'boxicons'


function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista />
      <Api1 />
      <Footer/>
    </div>
  );
}

export default App;
