import { useState } from 'react'
import styles from './TripList.module.css'
import useFetch from '../../hooks/useFetch'


const TripList = () => {
    const Link = 'http://localhost:3000/trips'
    const [url, setUrl] = useState(Link)

    
    // console.log(trips)
    let {data: trips, loading,error} =  useFetch(url)

  return (
    <div className={styles.container}>
        {
            error != null && <p>{error}</p>
        }
        { !error && 
        <div className={styles.flexContainer}>

        <h1>Ready to go?</h1>
        <h3>Trip List</h3>
        {
            loading && <p>Loading...</p>
        }
        <div>
            <button onClick={() => setUrl(Link)}>Get Trips</button>
            <button onClick={() => setUrl(`${Link}?location=beach`)}>
                Beach
            </button>
        </div>
        <ul className={loading ? styles.none :  styles.tripsList}>
            {
                trips &&    trips.map(trip => (
                    <li key={trip.id} className={styles.trip}>
                        <h3>{trip.name}</h3>
                        <p>Price: ${trip.price} mmk <br />
                            location: {trip.location}</p>
                    </li>
                ))
            }
        </ul>
        </div>
        }
    </div>
  )
}

export default TripList