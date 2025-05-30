"use client"

import axios from "axios";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/constants/constants";

const page = () => {
    const router = useRouter()
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")

    async function handlSubmit(e) {
        e.preventDefault();

         if(!name || !description){
            alert("NAME AND DES REQUIRED")
            return;
          }
        
        try{
          let res = axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/UserData`,{name,description})
          console.log("DATA POSTED :",res.data)
          setName("")
          setDescription("")
          router.push('/')
         
        }catch(err){
           console.error("DATA NOT POSTED : ",err)
        }
     
        
    }

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl px-8 py-8">ADD A NEW TODO</h1>
      <form className="flex flex-col gap-5 px-8" onSubmit={handlSubmit}>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="px-4 py-2 border outline-0" placeholder="UserName" />
        <input value={description} onChange={(e)=>setDescription(e.target.value)} type="text" className="px-4 py-2 border outline-0" placeholder="Description" />
        <button className="px-4 py-2.5 bg-green-800 rounded text-white font-bold tracking-widest">ADD TODO</button>
      </form>
    </div>
  )
}

export default page
