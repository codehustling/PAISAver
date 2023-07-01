import { HttpGET, BASE_URL } from "CommonStuff/requests.ts";

interface Details {
  run_id: string;
}

export async function getDetails(payload:Details,include_cookie = true) {
  let success = false;
  let result = undefined;

  while (!success) {

      HttpGET(BASE_URL, "user_inputs",payload, include_cookie)
      .then((response)=>{
      if (response) {
        success = true;
        result = response.result;
        
      }
    })
    .catch ((err)=> {
      console.log(err.message);
      

    })

    // Wait for some time before making the next request
    await new Promise(resolve => setTimeout(resolve, 2000));

  }

  console.log("Request successful!");
  console.log("Result:", result);
  return result;
}
