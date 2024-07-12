import { useState } from 'react'
import plus from '../assets/plus.svg'
import Ingredient from '../components/Ingredient'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReceipeCreate = () => {
  let navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [error, seterror] = useState([]);

  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const addIngredient = () =>{
    setIngredients((prev)=>{
      return [...prev, newIngredient]
    });
    setNewIngredient('');
  }

  let createReceipe = async(e) =>{

    try {
      e.preventDefault();
      let receipe = {
        title: title,
        description: description,
        ingredients: ingredients,
      }
      console.log(receipe);
  
      // server fetch and post code here 
      let res = await axios.post('http://localhost:4000/api/receipes',receipe)
      if(res.status === 200){
        navigate('/');
      }
    } catch(e) {
      // if error occure catch error while posting 
      seterror(Object.keys(e.response.data.errors));
    }

  }

  let clear = () =>{
    settitle('');
    setdescription('');
    setIngredients([]);
    seterror([]);
  }

  return (
    <div className="rounded-md mx-auto max-w-md border-2 border-white p-4">
      <h1 className="mb-6 text-2xl font-bold text-lime-500 text-center">Recipe Create Form</h1>
      <form action="" className="space-y-5" onSubmit={createReceipe}>
          <ul className='list-disc pl-3'>
              {error && error.map((error, index) => (
                  <li className='text-red-500 text-sm' key={index}>{error} is invalid value</li>
              ))}
          </ul>
          <input value={title} onChange={e => settitle(e.target.value)} type="text" placeholder="Recipe Title" className="w-full p-1"/>
          <textarea value={description} onChange={e=>setdescription(e.target.value)} placeholder="Recipe Description" rows="5" className="w-full p-1" />
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
                onClick={newIngredient.length >=3 ? addIngredient : null}
                className='cursor-pointer rounded-md hover:bg-green-200'/>
          </div>
          <div>

              <Ingredient ingredients={ingredients}/>
          </div>
          <button onClick={clear} className='w-full px-3 py-1 rounded-full bg-red-400 text-white hover:bg-red-300'>
            Clear
          </button>
          <button type='submit' className='w-full px-3 py-1 rounded-full bg-green-300 text-white hover:bg-lime-300'>
            Create Recipe
          </button>
      </form>
  </div>
  )
}

export default ReceipeCreate