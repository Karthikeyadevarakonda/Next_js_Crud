"use client"

import DeleteButton from "@/components/DeleteButton"
import axios from "axios"
import Link from "next/link"
import { HiPencilSquare } from 'react-icons/hi2'; 
import { useEffect, useState } from "react"
import { BASE_URL } from "@/constants/constants";

const Page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function FetchData() {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/UserData`)
        if (res?.data?.data) {
          setData(res.data.data)
        }
      } catch (err) {
        console.error("ERROR IN DATA FETCH", err)
      }
    }

    if (process.env.NEXT_PUBLIC_BASE_URL) {
      FetchData()
    }
  }, [])

  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return <div>Missing environment variable: NEXT_PUBLIC_BASE_URL</div>
  }

  return (
    <div className="flex flex-col gap-5 px-4 py-8">
      {data?.map((obj) => (
        <div key={obj._id} className="border px-5 py-4">
          <h1 className="font-bold text-xl">{obj.name.toUpperCase()}</h1>
          <h3>{obj.description}</h3>
          <div className="flex justify-end gap-5">
            <DeleteButton id={obj._id} setData={setData} />
            <Link href={`/update/${obj._id}`}><HiPencilSquare size={24} /></Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
