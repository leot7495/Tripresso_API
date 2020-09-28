import React from 'react'
import Pagination from "react-bootstrap/Pagination";

import './page.css'

function Page ({page , setPage}) {

    //總資料數
    let totalData = 100

    //每頁比數
    let perpage = 10

    //總頁數
    let totalPage = totalData / perpage

    let display = []

    for ( let i = 1 ; i <= totalPage ; i++) {
        if (i === page) {
            display.push(
                <Pagination.Item active key={i} className="href">
                    {i}
                </Pagination.Item>
            )
        }else{
            display.push(
                <Pagination.Item key={i} className="href" onClick={()=>setPage(i)}>
                    {i}
                </Pagination.Item>
            )
        }
    }

    return (
        <> 
        <Pagination className="page mx-auto">
            {display}
        </Pagination>
        </>
    )
}

export default Page