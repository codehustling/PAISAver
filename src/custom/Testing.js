import React, { useState, useEffect } from "react";
import { getDetails } from "CommonStuff/Calculation/getDetails.ts";
import DataTable from './DataTable';
const MyComponent = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // Fetch data from the getDetails() function
    const fetchData = async () => {
      try {
        const data = await getDetails({ run_id: "4" });
        setDetails(data.data);
        console.log(data.data)
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchData();
  }, []);

  return  (
    <div>
      <h1>Data Table</h1>
      <DataTable data={details} />
    </div>
  );
};

export default MyComponent;