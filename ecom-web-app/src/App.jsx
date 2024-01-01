import { Home } from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setorderAmount] = useState(0);
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    const { data } = await axios.get("/list-orders");
    setOrders(data);
  }
  useEffect(() => {
    fetchOrders();
  }, []);

  return <Home />;
};

export default App;
