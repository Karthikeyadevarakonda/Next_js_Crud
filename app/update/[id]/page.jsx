import EditTopicForm from '@/components/EditTopicForm';
import axios from 'axios';

const Page = async ({ params }) => {
  const { id } = params;

  let name = '';
  let description = '';

  try {
    const res = await axios.get(`http://localhost:3000/api/UserData/${id}`);
    if (res.status === 200 && res.data?.data) {
      name = res.data.data.name;
      description = res.data.data.description;
    }
  } catch (err) {
    console.error("ERROR:", err);
  }

  return (
    <EditTopicForm id={id} name={name} description={description} />
  );
};

export default Page;
