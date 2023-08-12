import { FiltersBrands } from './FiltersBrands'
import { FiltersCategories } from './FiltersCategories'

export const Filters = () => {
  return (
    <section className='flex justify-around items-center m-auto h-[150px] w-full mb-28 '>
        <FiltersCategories/>
        <FiltersBrands/>
    </section>
  )
}
