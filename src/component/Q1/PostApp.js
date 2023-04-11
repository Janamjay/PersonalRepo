import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PA from './Pa.module.css';

const url = "https://jsonplaceholder.typicode.com/posts"

export default function PostApp() {


    const [showData, setShowData] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setShowData(response.data)
        })
    }, [])

    function handleDelete(i) {
        showData.splice(i, 1)
        setShowData([...showData])
    }


    return (
        <div className={PA.main_container}>
            <h1>Api Data:</h1>

            {
                showData.length === 0 ? (
                    <Loading />
                ) : (
                    <DataTable
                    showData={showData}
                        handleDelete={handleDelete}
                    />
                )
            }

        </div>
    )
}


function DataTable(props) {
    const { showData, handleDelete } = props;

    return (
        <table >
            <thead>
                <tr>
                    <th>Sno.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    showData.map((value, ind) => {
                        return (
                            <DataRow
                                element={value}
                                handleDelete={handleDelete}
                                index={ind}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

function DataRow(props) {
    const { element, handleDelete, index } = props;

    return (
        <tr key={element.id}>
            <td>{index + 1}</td>
            <td>{element.title}</td>
            <td>{element.body}</td>
            <td onClick={() => handleDelete(index)}>❌</td>
        </tr>

    )
}


function Loading() {
    return (
        <h1> Data Loading... Ho raha hai Jaldi kya hai.</h1>
    )
}