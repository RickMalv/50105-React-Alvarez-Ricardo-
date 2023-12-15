import React from "react";
import Button from "react-bootstrap/Button";

export const AddItemButtonComponent = ({ label = "Agregar al carrito" }) => {
  return <Button>{label}</Button>;
};
