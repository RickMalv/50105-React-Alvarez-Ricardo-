import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { ItemListContainer } from "../components";
import { useParams } from "react-router-dom";

const Category = () => {
  const [productsFiltered, setProductsFiltered] = React.useState([]);
  const { categoryId } = useParams();
  const { products } = useAllProducts();

  React.useEffect(() => {
    const productsFiltered = products.filter(
      (product) => product.categoryId === categoryId
    );
    setProductsFiltered(productsFiltered);
  }, [categoryId]);

  return <ItemListContainer products={productsFiltered} />;
};

export default Category;
