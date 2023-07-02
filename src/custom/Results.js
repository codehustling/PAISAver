import React, { useState, useEffect } from "react";
import { getDetails } from "CommonStuff/Calculation/getDetails.ts";
import DataTable from './DataTable';
const MyComponent = () => {
  const [details, setDetails] = useState([]);
  const [result_state, setResult_state] = useState(false)
  useEffect(() => {
    // Fetch data from the getDetails() function
    const fetchData = async () => {

  
      try {
        const data = await getDetails();
        setDetails(data.data);
        setResult_state(true)
        console.log(data.data)
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchData();
  }, []);

  return  (
<div>
  { result_state? <div>
      <h1>Data Table</h1>
      <DataTable data={details} />
    </div>:<div>Calculating ...</div> }

    </div>
  );
};

export default MyComponent;