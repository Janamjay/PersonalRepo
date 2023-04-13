import React, { useContext } from 'react';
import { Listcontext } from './PostApi';
import post from './Post.module.css'

export default function LeftApi() {
    const { show, handledetails } = useContext(Listcontext)
    return (
        <div className={post.left_container}>
            <h1>Post list</h1>
            <table>
                {show.map((ele) => {
                    return (
                        <tbody>
                            <tr key={ele.id}>
                                <td onClick={() => handledetails(ele.id)}> <span>Title :</span>  {ele.title}</td>
                            </tr>
                            <hr />
                        </tbody>
                    )
                })}
            </table>
        </div>

    )
}