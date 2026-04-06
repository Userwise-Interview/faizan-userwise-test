import { useState } from "react"
import { getDummyFeed } from "../../constants/utils"
import { DataItem } from "./FeedItem"



const useFeed =()=>{

    const [isLoading, setLoading] = useState(false)

    const [data, setData] = useState<DataItem[]>([])
    const getData = ()=>{
         setLoading(true)
        setTimeout(()=> {
                    setLoading(false)
                    setData(getDummyFeed(1000))
                },1000)
    }

    return {
        data, isLoading, getData
    }
}

export default useFeed