import React, { useState } from "react";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  const [cartValue, setCartValue] = useState(0);
  return (
    <>
      <Header cartValue={cartValue} setCartValue={setCartValue} />
      <Product setCartValue={setCartValue} />
    </>
  );
}

export default App;
