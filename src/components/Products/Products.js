import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const handleProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <Row className="border-bottom">
        <Col lg={8} className="products">
          {products.map((product) => (
            <Product
              product={product}
              key={product.key}
              handleProduct={handleProduct}
            ></Product>
          ))}
        </Col>
        <Col lg={4}>
          <Cart cart={cart}></Cart>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
