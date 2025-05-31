import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import { useRouter } from "next/navigation";


const DeleteButton = ({id,setData}) => {
     const router = useRouter();
  async function RemoveTodo(){
    try{
       const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/api/UserData?id=${id}`);

       if(res.status !== 200) return alert("NO SUCH ID FOUND TO DELETE");

       setData(prev => prev.filter(todo => todo._id !== id));
      
    }catch(err){
       console.error("ERR IN DELETE :",err);
    }
    
  }
  return (
    <div className="text-red-400">
      <button onClick={RemoveTodo}><RiDeleteBin5Line size={24} /></button>
    </div>
  )
}

export default DeleteButton
