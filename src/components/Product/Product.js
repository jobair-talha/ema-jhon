import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, stock } = props.product;

  return (
    <div className="product">
      <img src={img} alt="product" />
      <div className="product-details">
        <h3>{name}</h3>
        <div>
          <h5>${price}</h5>
        </div>
        <p>only {stock} left in stock - order soon</p>
        <button onClick={() => props.handleProduct(props.product)}>
          <FontAwesomeIcon className="icon" icon={faCartPlus} />
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
