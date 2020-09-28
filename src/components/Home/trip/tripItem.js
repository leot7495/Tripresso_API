/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

import Tags from './tags'
import Dates from './dates'

function TripItem ({tripdata}) {
    
    if (!tripdata) {
        return 'loading...'
    }
    let dates = tripdata.group
    console.log(tripdata)
    return (
        <>
        <div className="tripContentBox">
            <div className="tripContentImg">
                <a href={tripdata.tour_detail_url} target="_blank">
                    <img src={tripdata.image_url} alt="tripContentImg" className="ContentImg" />
                </a>
            </div>
            <div className="tripContentTitle" style={{color: " rgb(31, 173, 131)"}}>
                <p style={{backgroundColor:"rgb(230, 228, 228)"}}>{tripdata.title}</p>

                {tripdata.tags.map((value) => {
                    return <Tags tags={value}/>
                })}
                <br/><br/>
                {dates.map((value,key) => {
                    return <Dates dates={value}/>
                })}

                <div className="price" style={{backgroundColor:"rgb(230, 228, 228)"}}>
                <h4 style={{color: "rgb(224, 153, 0)",backgroundColor:"rgb(230, 228, 228)"}}>評分 : {tripdata.rating}</h4>
                <p style={{color: "red",backgroundColor:"rgb(230, 228, 228)"}}>{tripdata.tour_days} 日遊 ~ 最低優惠價 ${tripdata.min_price}</p>

                </div>
                 
            </div>
        </div>
        </>
    )
}

export default TripItem