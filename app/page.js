"use client"

import DeleteButton from "@/components/DeleteButton"
import UpdateButton from "@/components/UpdateButton"
import axios from "axios"

import { useEffect, useState } from "react"


const Page = () => {
    const [data,setData] = useState([])
    async function FetchData() {
       try{
        const res = await axios.get("http://localhost:3000/api/UserData")
        if(res.data && res.data.data){
            setData(res.data.data)
        }
       }catch(err){
        console.error("ERROR IN DATA FETCH",err)
       }
    }
        useEffect(()=>{
          FetchData()
        },[])
  return (

    <div className="flex flex-col gap-5 px-4 py-8">
     {data && data.map((obj)=>{
      return(
    <div key={obj._id}  className="border px-5 py-4 ">
        <h1 className="font-bold text-xl">{obj.name.toUpperCase()}</h1>
        <h3>{obj.description}</h3>
        <div className="flex justify-end gap-5">
          <DeleteButton/>
          <UpdateButton/>
        </div>
      </div>
      )
     })}
       
       
    </div>
  )
}

export default Page
