import { useFilters } from "../../hook/useFilters";
import { productsData } from "../data/data";

export const FiltersBrands = () => {

  const {applyFilter} = useFilters()

  const uniqueBrands = productsData.filter(
    (product, index) =>
      productsData.findIndex((p) => p.marca === product.marca) === index
  );

  const selectedBrand = (brand) => {
    applyFilter(brand)
  }

  return (
    <article className="w-[500px] h-full ">
      <h1 className="font-bold text-xl mb-4 ">Marcas:</h1>

      <div className="flex flex-wrap justify-between ">
        {uniqueBrands.map((brand) => (
          <div className=" " key={brand.id}>
            <button className=" bg-blue-600 hover:bg-blue-800 w-[120px] font-medium mb-2 rounded-xl p-1 text-white outline" onClick={() => selectedBrand(brand.marca)}>
              {brand.marca}
            </button>
          </div>
        ))}
      </div>
    </article>
  );
};
//
