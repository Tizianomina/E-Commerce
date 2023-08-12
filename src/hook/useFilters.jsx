import { useEffect, useState } from "react";
import { productsData } from "../ecommerce/data/data";

export const useFilters = () => {
  const [currentFilteredProducts, setCurrentFilteredProducts] = useState(productsData);

  const applyFilter = (filter) => {
    const products = filter
      ? productsData.filter(
          (product) => product.marca === filter || product.category === filter
        )
      : productsData;

    setCurrentFilteredProducts(products);
  };

  useEffect(() => {
    console.log(currentFilteredProducts);
  }, [currentFilteredProducts]);

  return {
    filteredProducts: currentFilteredProducts,
    applyFilter: applyFilter,
  };
};
