import React, { useState, useRef } from 'react'
import forms from './Forms.module.css'

export default function Forms() {
    const userData = useRef([])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [lang, setLang] = useState("")

    const [show, setShow] = useState(false)


    function handleDelete(i) {
        userData.current.splice(i, 1)
        userData.current = [...userData.current]
        setShow(!show)
    }

    function handleAdd(e) {
        e.preventDefault()
        const newData = [...userData.current, { 'name': name, 'email': email, 'age': age, 'lang': lang }]
        userData.current = newData
        setShow(!show)

        setName("")
        setEmail("")
        setAge("")
        setLang("")
    }
    // console.log(userData);

    return (
        <div className={forms.main_background}>
                <h1>Record Field</h1>
            <section className={forms.data}>

                <div className={forms.field}>
                    <form>
                        <p>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} name='name'/></p>
                        <p>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
                        <p>Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></p>
                        <p>Languages:<input type="text" value={lang} onChange={(e) => setLang(e.target.value)} />
                        </p>
                        <button onClick={(e) => handleAdd(e)}>ADD</button>
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
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.age}</td>
                                            <td>{value.lang}</td>
                                            <td>
                                                <button onClick={() => handleDelete(ind)}>delete</button>
                                            </td>
                                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>

        </div>
    )
}