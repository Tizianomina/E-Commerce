import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardProduct } from "./ecommerce/components/CardProduct";
import { Header } from "./ecommerce/components/Header";
import { CartPage } from "./ecommerce/pages/CartPage";
import { GaleryProductsPage } from "./ecommerce/pages/GaleryProductsPage";
import { HomePage } from "./ecommerce/pages/HomePage";
import { ProductPage } from "./ecommerce/pages/ProductPage";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeryProducts" element={<GaleryProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
