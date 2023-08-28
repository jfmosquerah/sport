
import React, { useState, useEffect } from 'react';
import './Product.css';
import { productService } from '../../Service/productService';

export const ProductosLista = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    productService.getAll().then(response => setProducts(response.data));
  }, []);
    return (
        <ul>
        {products.map(product => (
          <div>
            <img src={product.image} alt={product.title} width="100" />
            <li key={product.id}>{product.title}</li>
            <span>{product.price}</span>
          </div>
        ))}
      </ul>
    )
}