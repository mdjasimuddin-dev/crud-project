import CreateForm from "../components/Create/CreateForm";


const CreatePage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div>
      <CreateForm />
    </div>
  );
};

export default CreatePage;
