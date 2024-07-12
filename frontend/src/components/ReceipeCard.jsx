import Ingredient from "./Ingredient"


const ReceipeCard = ({receipe}) => {
  return (
    <div className="bg-white p-5 rounded-2xl space-y-3">
        <h3 className="text-xl font-bold text-lime-600">{receipe.title}</h3>
        <p>Description</p>
        <p>{receipe.description}</p>
        <Ingredient  ingredients={receipe.ingredients} />
        <p className="text-gray-500">Published at - {receipe.createdAt}</p>
    </div>
  )
}

export default ReceipeCard