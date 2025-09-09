//API prodotti e-commerce = https://fakestoreapi.com/products

import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Products = () => {

  const [products, setProducts] = useState([]);

   useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
    }, []);

  return (
    <>
    <div className="container">
      <h1 className="mb-3">Prodotti</h1>
      <div className="row g-4">
        {products.map(product => (
          <div className="col-3" key={product.id}>
            <div className="card h-100">
              <img className="object-fit-cover" src={product.image} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.slice(0, 250)}...</p>
                <p className="card-text">{product.category}</p>
                <p className="card-text"><strong>{product.price} €</strong></p>
                <NavLink className="btn btn-primary" to={`/products/${product.id}`}>Dettaglio prodotto</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
};

export default Products
