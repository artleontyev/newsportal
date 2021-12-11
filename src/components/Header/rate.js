import React, { useState, useEffect } from "react";
const apiUrlCoin = 'ссылка';

function Coin(){
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()

    const gettingCoin = async () => {
        setIsLoading(true)
        await fetch(apiUrlCoin)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        gettingCoin()
    }, [])

    if(isLoading || !data){
        return <div>загрузка...</div>
    }


    return <div>{data?.data?.UZS} сум</div>
}


export default Coin