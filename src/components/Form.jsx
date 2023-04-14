import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';

export const Form = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [date,setDate] = useState('');
    const [gender,setGender] =useState('')
    const [hobbies,setHobbies] = useState([]);

    const handleHobbies = (e) => {
        const {value, checked} = e.target;
        console.log(`${value} is ${checked}`)
        if(checked){
            setHobbies([...hobbies,value]);
        }
        else{
            setHobbies(hobbies.filter((e)=>e!==value))
        }
        console.log(hobbies)
    }

    const createUser = () => {
        var data = {
            name,
            email,
            phone,
            dob:date,
            gender,
            hobbies
        }
        axios.post(`http://localhost:8080/userData`,data)
        .then((res)=>{console.log(res)})
        setName('')
        setEmail('')
        setPhone('')
        setDate('')
        setGender('')
        setHobbies([])
    }

  return (
    <div>
        <h2>Create</h2>
            <TextField id="standard-basic" label="Name" value={name} variant="standard" onChange={(e)=>{setName(e.target.value)}} />
            <br /><br />
            <TextField id="standard-basic" label="Email" value={email} variant="standard" onChange={(e)=>{setEmail(e.target.value)}}/>
            <br /><br />
            <TextField id="standard-basic" label="Phone" value={phone} variant="standard" onChange={(e)=>{setPhone(e.target.value)}}/>
            <br /><br />
            <label htmlFor="" style={{marginRight:'1rem'}}>D.O.B:  </label>
            <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>
            <br /><br />
            <label htmlFor="">Gender: </label>
            <input type="radio" name='gender' value={'male'} onChange={(e)=>{setGender(e.target.value)}}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name='gender' value={'female'} onChange={(e)=>{setGender(e.target.value)}}/>
            <label htmlFor="female">Female</label>
            <input type="radio" name='gender' value={'transgender'} onChange={(e)=>{setGender(e.target.value)}}/>
            <label htmlFor="transgender">Transgender</label>
            <input type="radio" name='gender' value={'other'} onChange={(e)=>{setGender(e.target.value)}}/>
            <label htmlFor="other">Other</label>
            <br /><br />
            <label htmlFor="">Hobbies: </label>
            <br />
            <input type="checkbox" name='hobby1' value={'News'} onChange={(e)=>handleHobbies(e)}/>
            <label htmlFor="">News</label>
            <br />
            <input type="checkbox" name='hobby2' value={'Cricket'} onChange={(e)=>handleHobbies(e)}/>
            <label htmlFor="">Cricket</label>
            <br />
            <input type="checkbox" name='hobby3' value={'Gardening'} onChange={(e)=>handleHobbies(e)}/>
            <label htmlFor="">Gardening</label>
            <br />
            <input type="checkbox" name='hobby4' value={'Traveling'} onChange={(e)=>handleHobbies(e)}/>
            <label htmlFor="">Traveling</label>
            <br />
            <input type="checkbox" name='hobby5' value={'Writing'} onChange={(e)=>handleHobbies(e)}/>
            <label htmlFor="">Writing</label>
            <br /><br />
            <button onClick={createUser}>Submit</button>    
    </div>
  )
}
