import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import { Box } from "@mui/material";
import DetailView from "./components/details/DetailView";
//components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const [checkoutItems, setCheckoutItems] = useState();
  useEffect(() => {
    setCheckoutItems([...cartItems]);
  }, [cartItems]);

  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/checkout"
              element={<Checkout checkoutItems={checkoutItems} />}
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
