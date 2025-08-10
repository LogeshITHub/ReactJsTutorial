import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Signup = () => {
  const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   console.log("Always call for all changes")
  // })
  // useEffect(()=>{
  //   console.log("Only once Call initialize time")
  // },[])
  useEffect(() => {
    console.log("if count const change value automatically trigger this...");
  }, [count]);
  return (
    <>
      <Card>
        <Card.Header>Sign Up</Card.Header>
        <Card.Body>
          <Card.Title>useEffect Concept Test - {count}</Card.Title>
          <Card.Text>To help To Change Ui DOM Changes .</Card.Text>
          <Button
            variant="primary"
            onClick={(e) => {
              setCount(count + 1);
            }}
          >
            Go Change State
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Signup;
