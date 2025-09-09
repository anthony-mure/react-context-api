// https://fakestoreapi.com/products/:id

import axios from "axios";
import { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailProduct = () => {

  const {id} = useParams();
  const [product, setProduct] = useState({});

  const navigate = useNavigate(); 

  useEffect(() =>{
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((resp) =>{
      setProduct(resp.data)
    });
  },[id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Dettaglio Prodotto</h1>
        </div>
          <div className="col-6" key={product.id}>
            <div className="card h-100">
              <img className="object-fit-cover" src={product.image} alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.category}</p>
                <p className="card-text"><strong>{product.price} €</strong></p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex">
              <button 
                 className="btn btn-secondary me-3"
                 onClick={() =>{
                    navigate(`/products/${parseInt(id) - 1}`);
                  }}
              >
                prev
              </button>
              <button 
                 className="btn btn-secondary" 
                 onClick={() =>{
                   navigate(`/products/${parseInt(id) + 1}`);
                 }}
              >
                  next
              </button>
            </div>
          </div> 
      </div>
    </div>
  )
};

export default DetailProduct
