import React from "react";
import Button from "react-bootstrap/Button";
import { AddItemButtonComponent } from "../AddItemButtonComponent";

export const ItemQuantitySelectorComponent = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const buttonStyle = {
    margin: "20px 0px",
    backgroundColor: "red",
    borderColor: "red",
  };
  const [quantity, setQuantity] = React.useState(1);

  const handleAdd = (e) => {
    setQuantity(quantity + 1);
  };

  const handleSubstract = (e) => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleReset = (e) => {
    setQuantity(1);
  };
  return (
    <div style={style}>
      <div>
        <Button style={buttonStyle} variant="primary" onClick={handleSubstract}>
          -
        </Button>
        <input type="number" value={quantity} disabled />
        <Button style={buttonStyle} variant="primary" onClick={handleAdd}>
          +
        </Button>
      </div>
      <AddItemButtonComponent quantity={quantity} handleReset={handleReset} />
    </div>
  );
};
