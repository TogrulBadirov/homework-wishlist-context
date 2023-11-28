import React from 'react'
import useFetch from '../../hooks/UseFetch';

const ProductColourFilter = ({props}) => {
    const {filters,handleCategoryFilter} = props
    const { data, loading } = useFetch("http://localhost:3000/filter");
  return (
    <div className="colour-filter">
    <h5>Colour</h5>
                  <ul>
                    {data && data.colour.map(item=>{
                        return(
                            <li className="colour-element" key={item.id}>
                      <span style={{ backgroundColor: item.name }} className={filters.colour.includes(item.name)?'chechked':''}>
                        <input
                          type="checkbox"
                          value={item.name}
                          checked={filters.colour.includes(item.name)}  
                          onChange={() =>
                            handleCategoryFilter("colour",item.name)
                          }
                        />
                        
                      </span>
                    </li>
                        )
                    })}
                    
                  </ul>
                </div>
  )
}

export default ProductColourFilter