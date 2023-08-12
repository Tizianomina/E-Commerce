import React from "react";
import { useLocation } from "react-router-dom";
import { Filters } from "../components/Filters";
import { CardProduct } from "../components/CardProduct";

export const GaleryProductsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  return (
    <section className="w-[90%] mt-[120px]  m-auto ">
      <Filters />
      <CardProduct searchQuery={query} />
    </section>
  );
};