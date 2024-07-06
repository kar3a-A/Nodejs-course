import React, { useEffect, useState } from 'react'

const TodoFilter = ({filterBy}) => {
  const [filter, setFilter] = useState('all')
  useEffect(() => {
    filterBy(filter)
  
  }, [filter, filterBy])

  const handleFilterChange = (filter) =>{
    setFilter(filter)
  }
  
  return (
    <>
        <div>
            <button 
              onClick={()=>handleFilterChange('all')}
              className={`button filter-button ${filter ==='all' ?`filter-button-active`: ''}`}>
                All
            </button>
            <button 
              onClick={()=>handleFilterChange('active')}
              className={`button filter-button ${filter ==='active' ?`filter-button-active`: ''}`}>
              Active
            </button>
            <button 
              onClick={()=>handleFilterChange('completed')}
              className={`button filter-button ${filter ==='completed' ?`filter-button-active`: ''}`}>
              Completed
            </button>
        </div>
    </>
  )
}

export default TodoFilter