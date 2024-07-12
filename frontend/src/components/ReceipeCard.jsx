

const ReceipeCard = ({receipe}) => {
  return (
    <div className="bg-white p-5 rounded-2xl space-y-3">
        <h3 className="text-xl font-bold text-lime-600">{receipe.title}</h3>
        <p>Description</p>
        <p>{receipe.description}</p>
        <div className="space-x-2">
            <span>Ingredients -</span>
            {
                receipe.ingredients.map((ingredient)=>{
                    return  (
                        <span key={ingredient} className="bg-lime-600 text-white px-2 py-1 text-sm rounded-full" >{ingredient}</span>
                    )
                })
            }


        </div>
        <p className="text-gray-500">Published at - {receipe.createdAt}</p>
    </div>
  )
}

export default ReceipeCard