import React from 'react'
import { taskListAtom } from '../../Atom_Storage'
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';


export default function Task() {

    let [todoList, setTodoList] = useRecoilState(taskListAtom);

    console.log(todoList);

    function handleDelete(i) {
        const newTodoList = [...todoList]
        newTodoList.splice(i,1)
        setTodoList(newTodoList);
      }

    return (
        <div>
            <h1>Tasks To Do !!</h1>
            {
                todoList.map((elemets, index) => {
                    return (
                        <ul key={index}>
                            <li>{elemets}</li>
                            <button onClick={()=>handleDelete(index)}>Delete</button>
                        </ul>
                    )
                }
                )}

            <div>
                <Link to={'/'}>
                    <br />
                    <br />
                    <button >Go to to add task</button>
                </Link>
            </div>

        </div>
    )
}