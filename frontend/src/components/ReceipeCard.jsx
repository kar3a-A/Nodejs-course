import { useState } from "react"
import Ingredient from "./Ingredient"
import axios from "axios";


const ReceipeCard = ({receipe}) => {

  const [error, seterror] = useState([]);

  const handleDelete = async(id) =>{
    try {
      let res = await axios.delete(`http://localhost:4000/api/receipes/${id}`);
      if(res.status === 200){
        window.location.reload();
      }
    }catch (error) {
      seterror(Object.keys(error.response.data.errors));
    }

  }
  return (
    <div className="bg-white p-5 rounded-2xl space-y-3">
      {
        error && error.map((err, index)=>{
          return (
            <p key={index} className="text-red-500 text-sm">{err}</p>
          )
        })
      }
        <h3 className="text-xl font-bold text-lime-600">{receipe.title}</h3>
        <p>Description</p>
        <p>{receipe.description}</p>
        <Ingredient  ingredients={receipe.ingredients} />
        <p className="text-gray-500">Published at - {receipe.createdAt}</p>
        <button 
          onClick={() =>{ handleDelete(receipe._id)  }}
          className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-400">
          Delete
        </button>
    </div>
  )
}

export default ReceipeCard