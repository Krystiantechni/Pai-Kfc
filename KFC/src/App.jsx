import { useState } from "react";
import "./App.css";
import products from "./mocks/products.json";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";

function App() {
  const [orderedProducts, setOrderedProducts] = useState([]);

  const handleProductSelect = (product) => {
    setOrderedProducts([...orderedProducts, product]);
  };

  const handleProductRemove = (orderedProduct) => {
    setOrderedProducts(
      orderedProducts.filter((product) => product.id !== orderedProduct.id)
    );
  };

  const handleSubmit = (selectedProducts) => {
    setOrderedProducts([...orderedProducts, ...selectedProducts]);
  };

  return (
    <>
      <Basket
        orderedProducts={orderedProducts}
        onProductRemove={handleProductRemove}
      ></Basket>
      <main>
        <header>
          <h1>Welcome!</h1>
        </header>
        <hr />
        <section style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {products.map((product) => (
            <Product
              product={product}
              orderedProducts={orderedProducts}
              onProductSelect={handleProductSelect}
              onSubmitButton={handleSubmit}
            ></Product>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
