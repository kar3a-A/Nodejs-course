import { useEffect, useState } from "react"
import ReceipeCard from "../components/ReceipeCard";
import Pagination from "../components/Pagination";
import { useLocation } from "react-router-dom";
import ScrollTopDown from "../components/ScrollTopDown";


const Home = () => {
    const [data, setdata] = useState([]);

    let location = useLocation();
    let searchQuery = new URLSearchParams(location.search)
    let page = searchQuery.get('page') || 1
    
    let links = {
            nextPage: true,
            prevPage: false,
            currentPage: 1,
            loopableLinks: [
                {number :1},
                {number :2},
                {number :3},
            ]
        }

    useEffect(()=>{
        let fetchReceipes = async() =>{
                let response = await fetch(`http://localhost:4000/api/receipes?page=${page}`)
                if(response.ok){
                    let data = await response.json()
                    setdata(data.receipes)
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
                    <ReceipeCard key={receipe._id} receipe={receipe}/>
                )
            })
        }
    <Pagination links={links} page={page} />
    <ScrollTopDown />

    </div>
  )
}

export default Home