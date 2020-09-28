import React from 'react'

function Dates ({dates}) {
    let {date , quantity} = dates
    date = date.slice(5,10)
    date = date.replace("-","/")
        
    return (
        <>
           <a href="##" className="tags">{date}</a>
        </>
    )
}

export default Dates