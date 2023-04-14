// 2. Build a multi-page app with React Router that allows users to create ,update and delete notes. Use React Router's Route component to set up the routes for each page. Use the Link component to navigate between the pages



import React, { useState } from 'react'
import { taskListAtom } from '../../Atom_Storage'
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

export default function Home() {

    //for user input
    const [input, setInput] = useState('')

    //for global todo list
    const [todoList, setTodoList] = useRecoilState(taskListAtom)

    function handleAdd() {
        const newTodo = [...todoList, input]
        setTodoList(newTodo)
        setInput("")
    }

    return (
        <div>
            <h1>Add Task:</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <br />
            <button onClick={handleAdd}>Add Items</button>

            <div>
                <Link to={'/task/list'}>
                    <br />
                    <br />
                    <button >Go to task list</button>
                </Link>
            </div>

        </div>
    )
}