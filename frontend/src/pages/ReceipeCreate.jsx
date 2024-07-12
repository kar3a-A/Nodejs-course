import plus from '../assets/plus.svg'
import Ingredient from '../components/Ingredient'

const ReceipeCreate = ({ingredients}) => {
  return (
    <div className="rounded-md mx-auto max-w-md border-2 border-white p-4">
      <h1 className="mb-6 text-2xl font-bold text-lime-500 text-center">Recipe Create Form</h1>
      <form action="" className="space-y-5">
          <input type="text" placeholder="Recipe Title" className="w-full p-1" />
          <textarea placeholder="Recipe Description" rows="5" className="w-full p-1" />
          <div className="flex space-x-2 items-center">
              <input type="text" placeholder="Recipe Ingredient" className="w-full p-1" />
              <img src={plus} 
                title="Add Ingredient"
                width="40" 
                alt="" 
                className='cursor-pointer rounded-md hover:bg-green-200'/>
          </div>
          <div>
              <Ingredient ingredients={['flour','salt']}/>
          </div>
          <button className='w-full px-3 py-1 rounded-full bg-green-300 text-white hover:bg-lime-300'>
            Create Recipe
          </button>
      </form>
  </div>
  )
}

export default ReceipeCreate