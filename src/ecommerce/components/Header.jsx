import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {

  // Creo el estado del buscador.
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) =>{

    const {value} = e.target;
    setSearchValue(value);

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log("La palabra es:" + searchValue)
    // setSearchValue("")
    navigate(`/galeryProducts?query=${searchValue}`);
  }


  return (
    <div className="w-full h-[100px] bg-gray-300 flex justify-around items-center fixed top-0 z-10">
      <NavLink to="/" className="font-bold text-xl">
        E-Commerce
      </NavLink>
      <form className="w-[450px] flex"  onSubmit={handleSubmit}>
        <input
          className="flex-1 px-2 rounded-md outline-none"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Busca un producto"
        />
        <button className="bg-gray-700 text-white px-4 rounded-[5px] ml-2">
          Buscar
        </button>
      </form>
      <NavLink
        to="/cart"
        className="bg-blue-400 p-2 rounded-xl text-white font-semibold"
      >
        Mi Carrito
      </NavLink>
    </div>
  );
};
