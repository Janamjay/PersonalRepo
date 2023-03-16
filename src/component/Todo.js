import React, { useState } from "react";
import '../component/style.css'

export default function Todo() {
    const [text, setText] = useState([]);
    const [newText, setnewText] = useState("");
    const [count, setcount] = useState(0);

    function handleAdd() {
        if (newText !== "") {
            const newtext = [...text, { elem: newText, completed: false }];
            setText(newtext);
            setnewText("");
            setcount(count + 1);
        }
    };

    function handleonDelete(index) {
        const newtext = [...text];
        if (!newtext[index].completed) {
            setcount(count - 1);
        }
        newtext.splice(index, 1);
        setText(newtext);
    };

    function handleonComplete(index){
        const newtext = [...text];
        // console.log(newtext[index]);
        if (newtext[index].completed === false) {
            newtext[index].completed = true
            setText(newtext);
            count > 0 && setcount(count - 1);
        }
        setText(newtext);
        // console.log(newtext)
    };
    return (
        <div className="outer-box">
            <div className="main-box">
                <div className="heading">Pending Task  ({count})</div>
                <div className="task-main">
                    {text.map((elem, index) => (
                        <div className="task" key={index}>
                            {elem.completed ? (
                                <s>{elem.elem}</s>
                            ) : (
                                elem.elem
                            )}
                            <div>
                            <button className="btnComplete "  onClick={() => handleonComplete(index)}>Complete</button>
                            <button className="btnDelete " onClick={() => handleonDelete(index)}>x</button>
                            </div>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setnewText(e.target.value)}
                />
                <button className="add" onClick={handleAdd}>Add</button>
            </div>
        </div>
    );
};
