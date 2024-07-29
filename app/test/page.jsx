const Page = () => {
    const handleForm = async (formData)=>{
    "use server";
    console.log(formData);
    const {username} = formData.get("username");
    console.log("hello", username);
    }
  return (
    <div>
        <form action={handleForm}>
          <input type="text" name="username" placeholder="Enter your name" />
          <button>Submit</button>
        </form>
  
    </div>
  )
}

export default Page