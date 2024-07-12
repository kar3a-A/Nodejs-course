

const Ingredient = ({ingredients}) => {
  return (
    <div className="space-x-2">
        <span>Ingredients -</span>
        {
            ingredients.map((ingredient)=>{
                return  (
                    <span key={ingredient} className="bg-lime-600 text-white px-2 py-1 text-sm rounded-full" >{ingredient}</span>
                )
            })
        }
    </div>
  )
}

export default Ingredient