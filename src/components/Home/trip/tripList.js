import React from 'react'
import TripItems from './tripItem'
import Spinner from 'react-bootstrap/Spinner'

import './trip.css'

function TripList ({tripdata}) {

    return (
        <>
            <div>
                {tripdata.map((value , key) => {
                        return <TripItems tripdata = {value} key={key}/>
                })}
            </div>
        </>
    )
}

export default TripList