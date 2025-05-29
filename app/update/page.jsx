

const page = () => {
   return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl px-8 py-8">UPDATE TODO</h1>
      <form className="flex flex-col gap-5 px-8 ">
        <input type="text" className="px-4 py-2 border outline-0" placeholder="UserName" />
        <input type="text" className="px-4 py-2 border outline-0" placeholder="Description" />
        <button className="px-4 py-2.5 bg-green-800 rounded text-white font-bold tracking-widest">UPDATE TODO</button>
      </form>
    </div>
  )
}

export default page
