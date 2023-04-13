import React, { useContext } from 'react'
import { Listcontext } from './PostApi'
import post from './Post.module.css'

export default function RightApi() {

    const { show, currenitem } = useContext(Listcontext)
    return (
        <div className={post.right_container}>
            <h1>Post Details</h1>
            <table>
                <tbody >
                    {show.filter((fitem) => fitem.id === currenitem).map((fditem) => {
                        return (
                            <tr>
                                <td>
                                    <p><span>User Id : </span> {fditem.userId}</p>
                                    <p><span> Id : </span> {fditem.id}</p>
                                    <p><span> Title : </span> {fditem.title}</p>
                                    <p><span> Description: </span> {fditem.body}</p>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}