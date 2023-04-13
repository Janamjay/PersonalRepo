import React, { useEffect, useState, createContext } from 'react'
import Axios from 'axios'
import LeftApi from './LeftApi'
import RightApi from './RightApi'
import post from'./Post.module.css'

export const Listcontext = createContext(" ")

export default function Postapi() {
    const [currenitem, setCurrentitem] = useState(0)
    const [show, setshow] = useState([])
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setshow(res.data)
            })
    }, [])
    const value = {
        show,
        currenitem,
        handledetails,
    };
    // console.log(show)
    function handledetails(ind) {
        setCurrentitem(ind)
    }
    console.log(currenitem)

    return (
        <div className={post.main_container}>
            <Listcontext.Provider value={value}>
                <LeftApi />
                <RightApi />
            </Listcontext.Provider>
        </div>
    )
}
