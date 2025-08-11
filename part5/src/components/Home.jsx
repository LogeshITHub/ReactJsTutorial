import React from "react";
import useFetch from "../custom-hooks/useFetch";

const Home = () => {
  let { data } = useFetch("http://localhost:5000/Products");

  return <div>Home - Total Products {data.length}</div>;
};

export default Home;
