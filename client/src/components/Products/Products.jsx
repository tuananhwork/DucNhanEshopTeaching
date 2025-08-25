import { useEffect, useState } from "react";
import Product from "../Product/Product";

import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  return (
    <div className="Products">
      {products.map((product) => (
        <Product
          key={product.id}
          img={product.image}
          name={product.title}
          price={product.price}
          desc={product.description}
        />
      ))}
    </div>
  );
};

export default Products;
