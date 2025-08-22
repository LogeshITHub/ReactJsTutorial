import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { OrbitProgress } from "react-loading-indicators";
import useFetch from "../custom-hooks/useFetch";
import toast, { Toaster } from "react-hot-toast";

function truncateText(text, maxLength) {
  return text && text.length > maxLength
    ? text.substring(0, maxLength) + "..."
    : text;
}

function timeAgo(dateString) {
  const date = new Date(dateString);
  const diffMs = new Date() - date;
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 60) return `${diffSec} secs ago`;
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} mins ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} hours ago`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay} days ago`;
}

const notify = () => toast.error("This didn't work.");

const ProductList = () => {
  //#region invididual Declare
  // const [products, setProducts] = useState([]);
  // const [isloading, setIsloading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/Products", { method: "GET" })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setIsloading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setIsloading(false);
  //     });
  // }, []);

  //#endregion

  //#region Custom Hooks
  let { isloading, data, error } = useFetch("http://localhost:5000/Products");
  //#endregion

  useEffect(() => {
    if (error) {
      toast.error("This didn't work.");
    }
  }, [error]);

  if (isloading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <OrbitProgress
          variant="spokes"
          color="#32cd32"
          size="medium"
          text="Loading .."
          textColor="#32cd32"
        />
      </div>
    );
  }

  return (
    <>
      {error && (
        <div>
          <Toaster />
        </div>
      )}
      <Container className="py-4">
        <Row className="g-4">
          {data.map((product) => (
            <Col key={product.id} lg={3} md={6} sm={12}>
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={product.images[0]}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title style={{ minHeight: "50px" }}>
                    {truncateText(product.title, 40)}
                  </Card.Title>
                  <Card.Text style={{ minHeight: "60px" }}>
                    {truncateText(product.description, 100)}
                  </Card.Text>

                  <h5 className="text-primary fw-bold mb-3">
                    ${product.price}
                  </h5>

                  <div className="d-flex gap-2">
                    <Button variant="primary">Add to Cart</Button>
                    <Button variant="success">Buy</Button>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Last updated {timeAgo(product.updatedAt)}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
