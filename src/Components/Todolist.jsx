import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'

const Todolist = () => {
    const [todo,settodo]=useState('');
    const[db,setDb]=useState([])
    function dataPost()
    {
        axios.post("http://localhost:3000/posts",{todo})
        .then(()=> {
            alert("Data has been posted")
            settodo('')
        })
        .catch(()=> {
            alert("Data has not posted")
        })
    }
    function getData()
    {
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setDb(res.data)
        })
        .catch(()=>{
            alert("datas not readed")
        })
    }
    function updateData(id,data)
    {
        axios.put(`http://localhost:3000/posts/${id}`,{todo:data})
        .then(()=>{
            console.log("data updated")
            getData();
        })
        .catch(()=>{
            console.log("data can't updated")
        })
    }
    function newData(id)
    {
            const data=prompt("enter the new data")
            updateData(id,data);
    }
    function deleteData(id)
    {
        axios.delete(`http://localhost:3000/posts/${id}`)
        .then(()=>{
            getData();
        })
        .catch(()=>{
            alert("data not delete")
        })
    }
    console.log(db)
    return (
        <div>
            <div>
                <p> 
                    {todo}
                </p>
                <TextField id="outlined-basic" label="Todo" 
                variant="outlined" 
                value={todo}  
                onChange={(ref)=>settodo(ref.target.value)}/>
            </div>
            <div>
                <Button variant="contained" onClick={dataPost}>Post</Button>
                <Button variant="contained" onClick={getData}>Get</Button>
                <div>
                    <ul>
                        {
                            db.map((item)=>(
                                <li key={item.id}>{item.todo} <button
                                onClick={()=> newData(item.id)}>Edit</button>
                                <button onClick={()=>deleteData(item.id)}></button></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todolist