import EditTopicForm from '@/components/EditTopicForm'
import { BASE_URL } from '@/constants/constants';
import axios from 'axios';

const getUserById = async (id) => {
  try {
    
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/UserData/${id}`);

    if (res.status !== 200) {
      throw new Error("FAILED TO FETCH USER WITH ID");
    }

    return res.data.data; 
  } catch (err) {
    console.error("ERROR : ", err);
    return null; 
  }
}

export default async function EditUser({ params }) {
  const { id } = await params;
  const data = await getUserById(id);

  if (!data) return <p>Error loading data.</p>;

  const { name, description } = data;

  return (
    <EditTopicForm id={id} name={name} description={description} />
  );
}
