import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFilters } from "../../hook/useFilters";
import { productsData } from "../data/data";

export const CardProduct = ({ searchQuery }) => {
  const { filteredProducts } = useFilters();

  const [addProductId, setAddProductId] = useState(null);

  const handleAddClick = (productId) => {
    setAddProductId(productId);

    setTimeout(() => {
      setAddProductId(null);
    }, 1500);
  };

  const Products = searchQuery
    ? filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProducts;

  return (
    <section className="flex flex-wrap justify-around w-full">
      {Products.map((product) => (
        <article
          className="bg-gray-50 inline-block w-[300px] rounded-md shadow-md mb-14 ml-2"
          key={product.id}
        >
          <img
            className="w-full h-[200px] object-cover rounded-t-md"
            src={product.image}
            alt=""
          />

          <div className="p-4 flex flex-col justify-between h-[200px]">
            <div>
              <h1 className="font-bold text-md">{product.name}</h1>
              <p className="font-medium text-gray-500 mt-2">
                Marca: {product.marca}
              </p>
            </div>
            <div className="flex justify-around mt-4">
              <NavLink
                to={`/product/${product.id}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Ver más
              </NavLink>
              <button
                className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md"
                onClick={() => handleAddClick(product.id)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
          {addProductId === product.id && (
            <p className="text-center bg-orange-500 font-semibold text-white">
              Producto agregado exitosamente
            </p>
          )}
        </article>
      ))}
    </section>
  );
};
