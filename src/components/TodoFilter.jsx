import React from 'react'

const TodoFilter = ({filterAll, filterActive, filterCompleted}) => {
  return (
    <>
        <div>
            <button 
              onClick={filterAll}
              className="button filter-button filter-button-active">
                All
            </button>
            <button 
              onClick={filterActive}
              className="button filter-button">
              Active
            </button>
            <button 
              onClick={filterCompleted}
              className="button filter-button">
              Completed
            </button>
        </div>
    </>
  )
}

export default TodoFilter