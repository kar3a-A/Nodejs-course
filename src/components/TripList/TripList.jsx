import { useState, useEffect } from 'react'
import styles from './TripList.module.css'



const TripList = () => {

    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setTrips(data)
        })
        .catch(err => console.log(err))
    }, [url])
  return (
    <div>
        <h1>Ready to go?</h1>
        <h3>Trip List</h3>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>Get Trips</button>
        <button onClick={() => setUrl(`http://localhost:3000/trips?location=beach`)}>
            Beach
        </button>
        <ul>
            {
                trips.map(trip => (
                    <li key={trip.id} className={styles.trip}>
                        <h3>{trip.name}</h3>
                        <p>Price: ${trip.price} | location: {trip.location}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TripList