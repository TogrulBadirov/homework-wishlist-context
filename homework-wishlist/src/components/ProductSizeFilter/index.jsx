import React from 'react'
import useFetch from '../../hooks/UseFetch';
import "./index.scss"

const ProductSizeFilter = ({props}) => {
    const {filters,handleCategoryFilter} = props
    const { data, loading } = useFetch("http://localhost:3000/filter");
  return (
    <div className="size-filter">
    <h5>Size</h5>
    <ul>
    {data && data.size.map(item=>{
                        return(
                            <li className="filter-elements" key={item.id}>
                            <div>
                              <input
                                type="checkbox"
                                value={item.name}
                                checked={filters.size.includes(item.name)}  

                                onChange={() =>
                                  handleCategoryFilter("size", item.name)
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

export default ProductSizeFilter