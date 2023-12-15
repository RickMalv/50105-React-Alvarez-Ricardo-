import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ItemListContainer, NavBarComponent } from "../components";
import { ItemDetailContainer } from "../pages";
import Category from "../pages/Category";

export const MainRouter = () => {
  //HOC - High Order Component
  // Siempre SIEMPRE SIEMPREEEE se debe crear una ruta por cada pagina
  //Parametro por url

  return (
    <BrowserRouter>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};
