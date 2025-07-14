import { useLoaderData } from "react-router";
import UpdateForm from "../components/Update/UpdateForm";

const UpdatePage = () => {
  const item = useLoaderData();
  return (
    <div>
      <UpdateForm product={item} />
    </div>
  );
};

export default UpdatePage;
