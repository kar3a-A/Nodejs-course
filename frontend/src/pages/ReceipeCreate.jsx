import { useRef, useState } from 'react'
import plus from '../assets/plus.svg'
import Ingredient from '../components/Ingredient'

const ReceipeCreate = () => {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const addIngredient = () =>{
    setIngredients((prev)=>{
      return [...prev, newIngredient]
    });
    setNewIngredient('');
  }
  return (
    <div className="rounded-md mx-auto max-w-md border-2 border-white p-4">
      <h1 className="mb-6 text-2xl font-bold text-lime-500 text-center">Recipe Create Form</h1>
      <form action="" className="space-y-5">
          <input type="text" placeholder="Recipe Title" className="w-full p-1" />
          <textarea placeholder="Recipe Description" rows="5" className="w-full p-1" />
          <div className="flex space-x-2 items-center">
              <input 
                value={newIngredient} 
                type="text" 
                placeholder="Recipe Ingredient"
                onChange={e=>setNewIngredient(e.target.value)}
                className="w-full p-1" />
              <img src={plus} 
                title="Add Ingredient"
                width="40" 
                alt="" 
                onClick={newIngredient.length >3 ? addIngredient : null}
                className='cursor-pointer rounded-md hover:bg-green-200'/>
          </div>
          <div>
              <Ingredient ingredients={ingredients}/>
          </div>
          <button className='w-full px-3 py-1 rounded-full bg-green-300 text-white hover:bg-lime-300'>
            Create Recipe
          </button>
      </form>
  </div>
  )
}

export default ReceipeCreate