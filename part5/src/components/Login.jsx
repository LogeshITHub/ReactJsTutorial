import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Login = () => {
  console.log(useParams());
  let { randomname } = useParams();
  let Navigate = useNavigate();

  function Navigatepage() {
    Navigate("/");
  }
  return (
    <>
      <div>Login - {randomname}</div>
      <button onClick={Navigatepage}> Back To Home</button>
    </>
  );
};

export default Login;
