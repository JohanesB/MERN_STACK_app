import { format } from 'path'
import React from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Update() {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        salary: ''
    })


    const {name, dob, gender, salary } = formData
    const onChange = (e:any) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e:any) => {
        e.preventDefault()
    }
  return (
    <>
        <section>
            <h1>
                <FaUser/>Update
            </h1>
            <p>Please update a Data</p>
        </section>
        <section>
            <form onSubmit={onSubmit}>
                <input type="text" name='name' value={name} id='name' placeholder='Enter employee name' onChange={onChange}/><br />
                <input type="date" name='dob' value={dob}  id='dob' onChange={onChange}/><br />
                <input type="gender" name='gender' value={gender} id='gender' placeholder='Enter employee gender' onChange={onChange}/><br />
                <input type="number" name='salary' value={salary} id='salary' placeholder='Enter employee salary' onChange={onChange}/><br />
                <button type='submit'>Update</button>
            </form>
        </section>
    </>
  )
}

export default Update