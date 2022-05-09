
import React , { useEffect, useState} from "react";




function App() {
const [apiResponse , setApiResponse] = useState("");

  const fetchData = () => {
    fetch("http://localhost:4000/name", {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }

    })
    .then(response => response.json())
    .then(data => setApiResponse(data.message));
  }

  useEffect(()=>{
    fetchData()
  },[]);

  return (
    <div className="App">
        {apiResponse}
    </div>
  );
}

export default App;
