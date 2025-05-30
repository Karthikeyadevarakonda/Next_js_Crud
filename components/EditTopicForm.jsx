"use client"

import axios from "axios";
import { useState } from "react"
import { useRouter } from "next/navigation";

const EditTopicForm = ({id,name:oldName,description:olddes}) => {
   const router = useRouter()
    const [name,setName] = useState(oldName);
    const [description,setDescription] = useState(olddes);

    async function handleSubmit(e){
        e.preventDefault()
        if(!name || !description){
            return alert("NAME AND DESCRIPTION MUST")
        }

        try{
          const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/UserData/${id}`,{name,description})
         if(res.status!==200){
             alert("ERROR IN UPDATING NO SUCH ID FOUND")
         }
          if(res.status===200){
            router.refresh()
            router.push('/')
         }
          
        }catch(err){
            console.error("ERR IN UPDATE : ",err)
        }
    }

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl px-8 py-8">UPDATE TODO</h1>
      <form className="flex flex-col gap-5 px-8 " onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="px-4 py-2 border outline-0" placeholder="UserName" />
        <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" className="px-4 py-2 border outline-0" placeholder="Description" />
        <button className="px-4 py-2.5 bg-green-800 rounded text-white font-bold tracking-widest">UPDATE TODO</button>
      </form>
    </div>
  )
}

export default EditTopicForm
