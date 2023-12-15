import React from "react";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../context";

export const AddItemButtonComponent = ({
  label = "Agregar al carrito",
  quantity,
  handleReset,
}) => {
  const { itemCount, setItemCount } = React.useContext(CartContext);

  const handleAddCart = () => {
    setItemCount(itemCount + quantity);
    handleReset();
  };
  return (
    <Button
      style={{
        margin: "20px 0px",
        backgroundColor: "red",
        borderColor: "red",
      }}
      onClick={handleAddCart}>
      {label}
    </Button>
  );
};
