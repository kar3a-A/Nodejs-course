

const ScrollTopDown = ({setUpDown, upDown}) => {

    const actionUpDown = (action) => {
        if(action == 'moveUp'){
            window.scrollTo({
                top:0, 
                left:0,
                behavior:'smooth'
            })
        }
        if(action == 'moveDown'){
            window.scrollTo({
                top:document.body.scrollHeight,
                left:0,
                behavior:'smooth'
            })
        }
    }
  return (
    <div className="flex flex-col fixed bottom-0 right-0 z-1">
        <button onClick={()=> actionUpDown('moveUp')} className="text-4xl" type="button">🔺</button>
        <button onClick={()=> actionUpDown('moveDown')} className="text-4xl" type="button">🔻</button>
    </div>
  )
}

export default ScrollTopDown