import Card from "react-bootstrap/Card";
import React from "react";
import { Link, useParams } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}>
      {products.map((product) => {
        return (
          <Card key={product.id} style={{ width: "18rem", margin: 20 }}>
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
