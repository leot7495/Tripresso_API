import React from 'react'

function SelectPrice ({setPrice}) {
    return (
        <>
            <select onChange={(e)=>{setPrice(e.target.value)}}>
                <option disabled="disabled" selected="selected">價錢篩選</option>
                <option value="price_desc">高 ~ 低</option>
                <option value="price_asc">低 ~ 高</option>
            </select>
        </>
    )
}

export default SelectPrice