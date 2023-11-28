import React from 'react'
import useFetch from '../../hooks/UseFetch';

const ProductCategoryFilter = ({props}) => {
    const {filters,handleCategoryFilter} = props
    const { data, loading } = useFetch("http://localhost:3000/filter");
  return (
    <div className="category-filter">
    <h5>Category</h5>
                  <ul>
                    {data && data.category.map(item=>{
                        return(
                            <li className="filter-elements" key={item.id}>
                      <div>
                        <input
                          type="checkbox"
                          value={item.name}
                          checked={filters.category.includes(item.name)}  
                          onChange={() =>
                            handleCategoryFilter("category", item.name)
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

export default ProductCategoryFilter