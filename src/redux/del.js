import React, { useEffect, useState } from 'react'

const User = () => {
    let [name , setName] = useState("")
    let [email , setEmail] = useState("")
    let [password , setPassword] = useState("")
    let [edit , setEdit] = useState("-1")
    let [arr , setArr] = useState(JSON.parse(localStorage.getItem("data"))||[])

    
    const handlesubmit =(e)=>{
        e.preventDefault();
            
        if(edit==-1){
          setArr((prev)=> [...prev,arr]);
        }
        else{
          let update = [...arr]
          update[edit]=arr
          setArr(update)
          setEdit(-1)
        }
    }

    useEffect(()=>{
      localStorage.setItem("data", JSON.stringify(arr))
    },[arr])

    const handlechange = (e)=>{
        const {name , value} = e.target
        setArr({
          ...arr,
          [name]: value
        })
    }


    const handledelet =(index)=>{
        let del =[...arr]
        del.splice(index,1)
        setArr(del)
    }


    const handleedit =(index)=>{
      setEdit(index)
      setArr(arr[index])
    }


  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='name' value={name} onChange={handlechange} name='name' />
            <input type="text" placeholder='email' value={email} onChange={handlechange} name='email' />
            <input type="text" placeholder='password' value={password} onChange={handlechange} name='password' />
            <input type="submit" value={edit==-1 ? "Submit" : "Edit"}/>
        </form>
        {
          arr.map((el,index)=>(
            <div key={index}>
               <h1>{el.namr} - {el.email}</h1>
               <button onClick={()=>handledelet(index)}>Delet</button>
               <button onClick={()=>handleedit(index)}>Edit</button>
            </div>
          ))
        }
    </div>
  )
}

export default User