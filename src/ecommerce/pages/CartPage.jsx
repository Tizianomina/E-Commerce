import { Link, useNavigate } from "react-router-dom";

export const CartPage = () => {

  const navigate = useNavigate()

  const onHome = () => {
    navigate('/galeryProducts')
  }

  return (
    <section className="mt-[130px]  w-full p-1">
      <button className="ml-[70px] px-3 rounded-lg bg-red-400 text-white" onClick={onHome}>
        Volver a la galería
      </button>
        <article className=" w-[60%] h-[130px] m-auto flex mb-5 bg-yellow-100 rounded-md">
          <img
            className=" rounded-md h-full w-[160px] object-cover"
            src="/src/assets/TV - LG/Smart Tv LG 86qned85sqa Mini Led 86 4k Qned Con Thinq Ai.webp"
            alt=""
          />
          <div className="ml-3 w-[400px] flex flex-col justify-between p-1">
            <h1>Smart Tv LG 86qned85sqa Mini Led 86 4k Qned Con Thinq Ai</h1>
            <p>Precio: $99.9</p>
          </div>
          <div className="flex flex-col flex-1">
            <p className="text-center">Precio unid. $99.9</p>
            <div className="w-full">
              <p className="text-center mb-2">Seleccionar cantidad deseada</p>
              <input
                type="number"
                className="bg-slate-600 text-white pl-1 w-[80px] h-[25px] mx-auto mb-3 block rounded-md"
              />
            </div>
            <div className="flex justify-around">
              <button className="bg-green-500 w-[100px] rounded-md text-white">
                Comprar
              </button>
              <button className="bg-red-500 w-[100px] rounded-md text-white">
                Eliminar
              </button>
            </div>
          </div>
        </article>
      <div className="w-[60%] m-auto flex justify-between items-center  mt-20">
        <p className="mr-4 font-semibold text-xl">Total: $9999.99</p>
        <div className="flex justify-between w-[50%] ">
          <button className="bg-green-600 w-[] h-[35px] px-2 rounded-md text-white">
            Finalizar compra
          </button>
          <button className="bg-red-600 w-[] h-[35px] px-2 rounded-md text-white">
            Eliminar todos los productos
          </button>
        </div>
      </div>
    </section>
  );
};
