import React, { useState } from "react";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  const [cartValue, setCartValue] = useState(0);
  return (
    <React.Fragment>
      <Header cartValue={cartValue} setCartValue={setCartValue} />
      <Product setCartValue={setCartValue} />
    </React.Fragment>
  );
}

export default App;
