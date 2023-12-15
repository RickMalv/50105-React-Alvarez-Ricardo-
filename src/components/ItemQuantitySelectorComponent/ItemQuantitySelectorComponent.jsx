import React from "react";
import Button from "react-bootstrap/Button";

export const ItemQuantitySelectorComponent = () => {
  return (
    <div>
      <Button variant="primary">+</Button>
      <input type="number" disabled />
      <Button variant="primary">-</Button>
    </div>
  );
};
