import React,{useState} from 'react'
import { taskListAtom } from '../../Atom_Storage'
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

export default function Task() {

    let [todoList, setTodoList] = useRecoilState(taskListAtom);

    const [value, setValue] = useState("")
    const [isupdate, setIsUpdate] = useState(false)

    console.log(todoList);

    function handleDelete(i) {
        const newTodoList = [...todoList]
        newTodoList.splice(i, 1)
        setTodoList(newTodoList);
    }

    function handleUpdate(i) {

        // console.log(elemets);

        setIsUpdate(true)

    }

    function handleUpdateDone(index, value) {
        if (value === "") {
            alert("please enter a value")
        } else {
            const newTodoList = [...todoList]
            newTodoList.splice(index, 1, value)

            setTodoList(newTodoList)
            setValue("")
            setIsUpdate(false)
        }
    }

    return (
        <div>
            <h1>Tasks To Do !!</h1>
            {
                todoList.map((elemets, index) => {
                    return (
                        <ul key={index}>

                            {
                                isupdate ?
                                    <input value={value} onChange={(e) => setValue(e.target.value)} />
                                    :
                                    <li>{elemets}</li>
                            }
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            {
                                !isupdate ?
                                    <button  onClick={() => handleUpdate()}>update</button>
                                    :
                                    <button onClick={() => handleUpdateDone(index, value)}>update done</button>
                            }

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