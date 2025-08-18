import React, { useEffect, useState } from "react";
import useFetch from "../custom-hooks/useFetch";
import axios from "axios";
import NewProduct from "./NewProduct";

const Home = () => {
  // let { data } = useFetch("http://localhost:5000/Products");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []); // <-- Empty dependency array: runs only once

  return (
    <>
      <div>Home - Total Products {products.length}</div>
      <NewProduct />
    </>
  );
};

export default Home;
