import { useParams, useNavigate } from "react-router-dom";
import { productsData } from "../data/data";
import { useEffect, useState } from "react";

export const ProductPage = () => {
  const { id } = useParams();
  const [showMessage, setShowMessage] = useState(false);
  const [timer, setTime] = useState(null);

  const product = productsData.find((product) => product.id === parseInt(id));

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  const handleBuyClick = () => {
    setShowMessage(true);

    const timerid = setTimeout(() => {
      setShowMessage(false);
    }, 1500);

    setTime(timerid)
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <section className="mt-[130px] w-full ">
      <button
        className="ml-[70px] px-3 rounded-lg bg-red-400 text-white"
        onClick={onNavigateBack}
      >
        Volver
      </button>

      <section className=" w-full h-[60vh] mt-4 flex justify-around">
        <img
          className="rounded-xl border border-cyan-950"
          src={product.image}
          alt=""
        />

        <article className=" w-[50%] h-full">
          <h1 className="font-bold text-xl text-center mb-10">
            {product.name}
          </h1>
          <div className=" px-4 mb-10 w-full">
            <p className="mb-3">
              <b>Categoria</b>: {product.category}
            </p>
            <p className="mb-3">
              <b>Marca</b>: {product.marca}
            </p>
            <p className="mb-3">
              <b>Descripción: </b>
              {product.description}
            </p>
            <p className=" text-lg bg-yellow-300 inline-block rounded-md p-2">
              <b>Precio: ${product.price} </b>
            </p>
          </div>
          <div className="w-[50%] m-auto flex justify-around ">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Agregar al carrito
            </button>
            <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md" onClick={handleBuyClick}>
              Comprar
            </button>
          </div>
          {showMessage && (
            <h1 className="text-center mt-5 bg-green-900 text-green-200 rounded-md w-[500px] py-2 m-auto">
              Compra realizada correctamente
            </h1>
          )}
        </article>
      </section>
    </section>
  );
};
