import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useForm from './read'

const Todo = () => {
var [typetext,settypetext]=useForm({title:"", quantity:"", description:""})

var [myTask,setmyTask]=useState([]);


const addtoTask =() => {
    setmyTask(
       myTask=>[...myTask,typetext]
 )
}



  return (
    <div>
      <Typography variant='h3'>Welcome to my Todo List</Typography>
      <br></br>
        <TextField  variant='standard' name='title' value={typetext.title} onChange={settypetext} label='Todo Title'></TextField>
        <TextField variant='standard' name='quantity' value={typetext.quantity}  onChange={settypetext} label='Quntity'></TextField>
        <TextField variant='standard' name='description' value={typetext.description}  onChange={settypetext} label='Description'></TextField>
        <Button  variant='contained' onClick={addtoTask}>Save</Button>
        <Typography variant='h4'>output {typetext}</Typography>
<ul>
    {myTask.map((value,index)=>{
        return <div>
            <li key={index}>{value}</li>
        </div>
    })}
</ul>

      
    </div>
  )}

export default Todo
