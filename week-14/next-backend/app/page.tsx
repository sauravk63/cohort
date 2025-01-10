import axios from "axios";

async function getUserDetails() {

  const resp = await axios.get('https://my-app.nobodyhasitall.workers.dev/')
  
  return resp.data;
  
}

export default async function Home() {

  const userDetails = await getUserDetails();
  return (
    <>
    <div>NextJS backend</div>
    <p>{userDetails.title}</p>
    <p>{userDetails.description}</p>
    </>
  );
}
