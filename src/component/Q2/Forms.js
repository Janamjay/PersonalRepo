import React, { useState, useRef } from 'react'
import forms from './Forms.module.css'

export default function Section() {
    // const [userData, setUserData] = useState([])
    const userData = useRef([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [lang, setLang] = useState("")
    const [istrue, setisTrue] = useState(false)
    const [show, setShow] = useState(false)
    const isupdatedvalue = useRef()
    const updatedName = useRef()
    const updatedemail = useRef()
    const updatedage = useRef()
    const updatedlang = useRef()
    function handleDelete(i) {
        userData.current.splice(i, 1)
        // setUserData([...userData])
        userData.current = [...userData.current]
        setShow(!show)
    }
    function handleAdd(e) {
        e.preventDefault()
        // setUserData([...userData, { 'name': name, 'email': email, 'age': age, 'lang': lang }])
        const newData = [...userData.current, { 'name': name, 'email': email, 'age': age, 'lang': lang }]
        userData.current = newData
        setShow(!show)
        setName("")
        setEmail("")
        setAge("")
        setLang("")
    }
    // console.log(userData);
    function updatedvalue(value) {
        isupdatedvalue.current = value
        console.log(value)
        setisTrue(true)
    }

    function updatedData() {
        userData.current.map((ele, ind) => {
            if (ele.email === isupdatedvalue.current.email) {
                ele.name = updatedName.current.value
                ele.email = updatedemail.current.value
                ele.age = updatedage.current.value
                ele.lang = updatedlang.current.value
                return ele;
            } else {
                return ele;
            }

        })
        setShow(!show)

        console.log(userData)



    }
    return (
        <div className={forms.main_background}>
            <h1>Record Field</h1>
            <section className={forms.data}>
                <div className={forms.field}>
                    <form>
                        <p>Name:<input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
                        <p>Email:<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                        <p>Age:<input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></p>
                        <p>Languages:<input type="text" value={lang} onChange={(e) => setLang(e.target.value)} />
                        </p>
                        <button onClick={(e) => handleAdd(e)}>ADD values</button>
                    </form>
                </div>
                <div className={forms.visible}>
                    <form>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Age: {age}</p>
                        <p>Languages: {lang}</p>
                    </form>
                </div>
            </section>
            <section className={forms.output}>
                <table >
                    <thead>
                        <tr>
                            {/* <th>Sno.</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Languages</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.current.map((value, ind) => {
                                return (
                                    <tr key={value.name}>
                                        {/* <td>{ind + 1}</td> */}
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.age}</td>
                                        <td>{value.lang}</td>
                                        <td>
                                            <button onClick={() => handleDelete(ind)}>delete</button>
                                            <button onClick={() => updatedvalue(value)}>Update </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
            <div className={`${istrue ? forms.active : forms.nonactive}`}>
                <input ref={updatedName} type="text" placeholder='Enter updated name' />
                <input ref={updatedemail} type="text" placeholder='Enter updated email' />
                <input ref={updatedage} type="number" placeholder='Enter updated age' />
                <input ref={updatedlang} type="text" placeholder='Enter updated lang' />
                <button onClick={updatedData}>Updated data</button>
            </div>
        </div>
    )
}