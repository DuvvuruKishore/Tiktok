import React,{useEffect, useState} from 'react';
import './App.css';
import axios from './axios';

function App() {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [updatedName,setUpdatedName]=useState('');
const [value,setValues]=useState([])

useEffect(()=>{
  axios.get('/get').then((data)=>{
    setValues(data.data);
    console.log(data.data);
  })
},[])

const addValues=(e)=>{
e.preventDefault();
const details={
  name:name,
  Email:email
}
axios.post('/post',details)
}
const deleteData=(e,id)=>{
  e.preventDefault();
 // setValues(value.filter((v)=>v._id!==id));
 axios.delete(`/delete/${id}`)
}

const updateValue=(e,id)=>{
  e.preventDefault();
  
    axios.put('/update',{
      id:id,
      newname:updatedName
    
    });
}

  return (
    <div className="App">
    <form>
      <label>name:</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      <button onClick={addValues}>Submit</button>
      </form>
    {value.map((v)=>(
      <div>
      <p>{v.name}</p>
      <p>{v.Email}</p>
      <input  onChange={(e)=>setUpdatedName(e.target.value)}></input>
    
      
      
      <button onClick={(e)=>updateValue(e,v._id)}>Update</button>
      <button onClick={(e)=>deleteData(e,v._id)}>delete</button>
      </div>
    ))}
    
    </div>
  );
}

export default App;
