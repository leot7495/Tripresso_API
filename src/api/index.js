import axios from 'axios'

const cors = 'https://cors-anywhere.herokuapp.com/'

export const getTripApiData = async (score , price , page) => {
    
    let url = `http://interview.tripresso.com/tour/search?page=${page}`
    if (score) {
        score === 'rating_desc' ? url = `http://interview.tripresso.com/tour/search?page=${page}&sort=rating_desc` : 
        url = `http://interview.tripresso.com/tour/search?page=${page}&sort=rating_asc` 
    }
    if (price) {
        price === 'price_desc' ? url = `http://interview.tripresso.com/tour/search?page=${page}&sort=price_desc` : 
        url = `http://interview.tripresso.com/tour/search?page=${page}&sort=price_asc` 
    }
    console.log(url)
    const { data } = await axios.get(`${cors}${url}`)
    
    try {
        const dataArray = data.data.tour_list
        return dataArray
    }
    catch{
        console.log('取得資料失敗')
    }
}