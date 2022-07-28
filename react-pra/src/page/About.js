import React, { useEffect, useCallback, useState } from 'react'
import { useLocation, useSearchParams, useParams } from 'react-router-dom'

function About() {

    // 获取路由传参
    const location = useLocation()
    const [seacrchParams, setSeacrchParams] = useSearchParams()
    const parmas = useParams()
    let [num, changeNum] = useState(0)



    const change = useCallback((a) => {
        changeNum(num + a)
    }, [num])


    useEffect(() => {
        console.log(location);
        console.log(seacrchParams.get("id"));
        console.log(parmas);
    }, [])

    return (
        <div className='about_container'>
            <button onClick={change.bind(null, 1)}>改数{num}</button>
        </div>
    )
}
export default About