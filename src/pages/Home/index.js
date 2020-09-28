import React , {useEffect , useState} from 'react'

import { getTripApiData } from '../../api'
import HeaderImg from '../../components/Home/headerImage'
import TripContent from '../../components/Home/trip/tripList'
import SelectPrice from '../../components/Home/select/selectPrice'
import SelectScore from '../../components/Home/select/selectScore'
import Page from '../../components/Home/page/page'
import Spinner from 'react-bootstrap/Spinner'
import Modal from 'react-bootstrap/Modal'


function Home () {

    
    //剛開始取得資料
    const [tripdata , setTripdata] = useState([])

    //篩選評分取得資料
    const [score , setScore] = useState(undefined)

    //篩選價錢取得資料
    const [price , setPrice] = useState(undefined)

    //取得分頁頁數
    const [page , setPage] = useState(1)

    // 等待資料秀出 Spinner
    // const [show, setShow] = useState(false);

    //等待資料回傳跑 Spinner
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function fetchdata () {

        //轉頁 回到最頂端
        window.document.body.scrollTop = 0
        window.document.documentElement.scrollTop = 0
        // 取API 回傳資料 傳到 tripdata
        // const response = await getTripApiData(score, price, page)
        // setTripdata(response)
        setTripdata( await getTripApiData(score, price, page))
        handleClose()
    }

    useEffect(() => {
        handleShow()
        fetchdata()
    },[score , price , page])

    useEffect(() => {
        setPage(1)
    },[score , price])

    useEffect(() => {
        setPrice(undefined)
    },[score])

    useEffect(() => {
        setScore(undefined)
    },[price])


    return (
        <>
            <HeaderImg />

            <div className="selectBox">
                <SelectPrice setPrice={setPrice}/>
                <SelectScore setScore={setScore}/>
            </div>

            <TripContent tripdata={tripdata}  setTripdata={setTripdata}/>

            <div style={{textAlign:"center" , height:"40px"}}>
                <Page setPage={setPage} page={page}/>
            </div>

            <Modal show={show} style={{background: "none"}}>
                <p className="Modal" style={{background: "none"}}>Loading...<Spinner animation="border" variant="info"/></p>
            </Modal>
        </>
    )
}

export default Home