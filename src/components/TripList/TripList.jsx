import { useState, useEffect } from 'react'
import styles from './TripList.module.css'


const TripList = () => {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/trips')
        .then(response => response.json())
        .then(data => {
            setTrips(data)
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h1>Ready to go?</h1>
        <h3>Trip List</h3>
        <ul>
            {
                trips.map(trip => (
                    <li key={trip.id} className={styles.trip}>
                        <h3>{trip.name}</h3>
                        <p>Price: ${trip.price}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TripList