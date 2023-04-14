import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar';




export const AllUsers = () => {
    
    const [users,setUsers] = useState([]);
    const [idData,setIdData] = useState('');
    const [toggle,setToggle] = useState(false);

    const getUsers = () => {
        axios.get(`http://localhost:8080/userData`)
        .then((res)=>{setUsers(res.data)})
    }


    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/userData/${id}`)
        .then(()=>console.log('delete sucessfully'))
    }
    const handleDelete = () => {
        deleteUser(idData)
        setIdData('')
        setToggle(!toggle)
    }

    useEffect(()=>{
        getUsers();
    },[toggle])


  return (
    <div>
        <Navbar />
        All Users
        <div>
            <center>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>D.O.B.</th>
                    <th>Gender</th>
                    <th>Hobbies</th>
                </tr>
                {
                    users.map((el)=>{
                        return <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>{el.phone}</td>
                            <td>{el.dob}</td>
                            <td>{el.gender}</td>
                            <td>{el.hobbies.join(', ')}</td>
                        </tr>
                    })
                }
            </table>
            </center>
            <div>
                <input type="text" placeholder='Enter id' value={idData} onChange={(e)=>setIdData(e.target.value)}/>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
  )
}
