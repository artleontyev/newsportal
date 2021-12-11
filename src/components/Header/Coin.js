import React, {useState, useEffect} from "react";
import axios from "axios";


function Coin() {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()

    const gettingCoin = async () => {
        setIsLoading(true)
        await axios.get('https://freecurrencyapi.net/api/v2/latest?apikey=c5d8ecb0-573a-11ec-9171-0d4d5d7e5089')
            .then(res => console.log("res", res.data))
        setData(data)
        setIsLoading(false)
    }

    useEffect(() => {
        gettingCoin()
    }, [])

    if (isLoading || !data) {
        return <div>загрузка...</div>
    }


    return <div>1$ ={data?.data?.RUB} ₽</div>
}


export default Coin