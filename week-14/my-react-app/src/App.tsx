import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [loader, setLoader] = useState(true);
  const [userDetails, setUserDetails] = useState({
    title : "",
    description : ""
  });

  useEffect(() => {
    // Function to fetch user details
    const fetchUserDetails = async () => {
      try {
        const resp = await axios.get('https://my-app.nobodyhasitall.workers.dev/',{ withCredentials: true });
        setUserDetails(resp.data); // Assuming the API returns the object with title and description
        
      } catch (error) {
        console.error('Error fetching data:', error);
        // Optionally, you can update state to show an error to the user
        // setUserDetails({ title: "Error", description: "Failed to load user details" });
      } finally {
        setLoader(false);
      }
    };
    
    fetchUserDetails();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loader) {
    return (
      <div>Still Loading</div>
    );
  }
  
  return (
    <>
      <div>
        title : {userDetails.title}
        <br />
        description : {userDetails.description}
      </div>
    </>
  );
  console.log(userDetails);
}

export default App;