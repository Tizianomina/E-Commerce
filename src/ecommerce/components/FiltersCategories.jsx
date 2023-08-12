import { useFilters } from "../../hook/useFilters";
import { productsData } from "../data/data";

export const FiltersCategories = () => {
  //Realizo un filtro para traer y que no se repitan las categorías para realizar un filtrado de los productos.
  const uniqueCategories = productsData.filter(
    (product, index) =>
      productsData.findIndex((p) => p.category === product.category) === index
  );

  const {applyFilter} = useFilters()
  
  const selectedCategory = (category) => {
    applyFilter(category)
  }

  return (
    <article className="w-[500px] h-full ">
      <h1 className="font-bold text-xl mb-4 ">Categorias:</h1>

      <div className="flex flex-wrap justify-between ">
        {uniqueCategories.map((category) => (
          <div className=" " key={category.id}>
            <button className="hover:bg-blue-800 bg-blue-600 w-[120px] mb-2 rounded-xl p-1 font-medium text-white outline" onClick={()=>selectedCategory(category.category)}>
              {category.category}
            </button>
          </div>
        ))}
      </div>
    </article>
  );
};
