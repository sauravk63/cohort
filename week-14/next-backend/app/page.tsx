import axios from "axios";

async function getUserDetails() {

  await new Promise((r)=>{setTimeout(r, 2500)});
  const resp = await axios.get('http://localhost:3000/api/user')
  return resp.data;
  
}

export default async function Home() {

  const userDetails = await getUserDetails();
  
  return (
    <>
      <div>NextJS backend</div>
      <div className="border p-4 rounded">
      <p>{userDetails.name}</p>
      <p>{userDetails.email}</p>
      </div>
    </>
  );
}
