import React from 'react'
import useFetch from '../../hooks/UseFetch';

const ProductBrandFilter = ({props}) => {
    const {filters,handleCategoryFilter} = props
    const { data, loading } = useFetch("http://localhost:3000/filter");
  return (
    <div className="brand-filter">
                  <h5>Brand</h5>
                  <ul>
                    {data && data.brand.map(item=>{
                        return(
                            <li className="filter-elements" key={item.id}>
                      <div>
                        <input
                          type="checkbox"
                          value={item.name}
                          checked={filters.brand.includes(item.name)}  
                          onChange={() =>
                            handleCategoryFilter("brand",item.name)
                          }
                        />
                        <label htmlFor="">{item.name}</label>
                      </div>
                    </li>
                        )
                    })}
                    
                  </ul>
                </div>
  )
}

export default ProductBrandFilter