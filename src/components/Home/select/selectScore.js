import React from 'react'

import './select.css'

function SelectScore ({setScore}) {
    return (
        <>
            <select className="SelectScore" onChange={(e)=>{setScore(e.target.value)}}>
                <option disabled="disabled" selected="selected">評分篩選</option>
                <option value="rating_desc">高 ~ 低</option>
                <option value="rating_asc">低 ~ 高</option>
            </select>
        </>
    )
}

export default SelectScore