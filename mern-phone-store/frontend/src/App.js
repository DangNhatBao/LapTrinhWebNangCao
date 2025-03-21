import React from "react";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center">Danh sách sản phẩm</h1>
      <ProductList />
    </div>
  );
}

export default App;
