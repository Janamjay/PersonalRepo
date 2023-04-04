import React, { useState } from 'react'
import { taskListAtom , myAtom } from '../../Atom_Storage'
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

export default function Home() {

    //for user input
    const [input, setInput] = useState('')

    //for global todo list
    const [todoList, setTodoList] = useRecoilState(taskListAtom)

    //for global style
    const [style, setStyle] = useRecoilState(myAtom)

    function handleAdd() {
        const newTodo = [...todoList, input]
        setTodoList(newTodo)
        setInput("")
    }


    function handleColorChange() {
        (style.color==="red")?
            setStyle({color:"blue"}) : setStyle({color:"red"})
        
    }

    return (
        <div>
            <h1>Add Task:</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <br/>
            <button onClick={handleAdd}>Add Items</button>

            <div>
                <Link to={'/task/list'}>
                    <br />
                    <br />
                    <button >Go to task list</button>
                </Link>
            </div>

            <div>
                <h2 style={style}>Hi! I change the color on Click the button.</h2>
                <button onClick={handleColorChange}>Change Colour</button>
            </div>

        </div>
    )
}