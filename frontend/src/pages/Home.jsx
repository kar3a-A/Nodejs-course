import { useEffect, useState } from "react"
import ReceipeCard from "../components/ReceipeCard";


const Home = () => {
    const [data, setdata] = useState([]);

    useEffect(()=>{
        let fetchReceipes = async() =>{
                let response = await fetch('http://localhost:4000/api/receipes')
                if(response.ok){
                    let data = await response.json()
                    setdata(data.receipes)
                }


        }
        fetchReceipes()
    },[])
  return (
    <div className="space-y-3">
        {
            data && data.map((receipe)=>{
                return (
                    <ReceipeCard key={receipe._id} receipe={receipe}/>
                )
            })
        }


    </div>
  )
}

export default Home