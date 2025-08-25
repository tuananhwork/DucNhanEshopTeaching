import { useEffect, useState } from "react";

const CallAPI = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>
          <h1>{product.title}</h1>
          <img src={product.image} alt="" />
        </li>
      ))}
    </div>
  );
};

export default CallAPI;
