import { useEffect, useState } from "react"
import ReceipeCard from "../components/ReceipeCard";
import Pagination from "../components/Pagination";
import { useLocation } from "react-router-dom";
import ScrollTopDown from "../components/ScrollTopDown";


const Home = () => {
    const [data, setdata] = useState([]);
    const [links, setlinks] = useState(null);



    let location = useLocation();
    let searchQuery = new URLSearchParams(location.search)
    let page = searchQuery.get('page') || 1

    // backend code here

    useEffect(()=>{
        let fetchReceipes = async() =>{
                let response = await fetch(`http://localhost:4000/api/receipes?page=${page}`)
                if(response.ok){
                    let data = await response.json()
                    setdata(data.response.data)
                    setlinks(data.response.links)
                    // console.log(data.response.links)
                }

        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })

        }
        fetchReceipes()
    },[page])

  return (
    <div className="space-y-3">
        {
            data && data.map((receipe)=>{
                return (
                    <ReceipeCard key={receipe._id} receipe={receipe} />
                )
            })
        }
    {links && <Pagination links={ links} page={page} />}
    <ScrollTopDown />

    </div>
  )
}

export default Home