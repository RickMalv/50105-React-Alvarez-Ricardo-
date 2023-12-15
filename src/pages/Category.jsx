import React from "react";
import { useAllProductsByFilter } from "../hooks/useProducts";
import { ItemListContainer } from "../components";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categoryId } = useParams();
  const { products } = useAllProductsByFilter(
    "products",
    categoryId,
    "category"
  );

  return <ItemListContainer products={products} />;
};

export default Category;
