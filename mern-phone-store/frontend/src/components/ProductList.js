import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="p-4 shadow-md rounded-md bg-white">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-500">{product.price}₫</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
